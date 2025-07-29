import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.json({ 
        success: true, 
        message: "문의가 성공적으로 전송되었습니다!",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "입력 데이터가 유효하지 않습니다.",
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." 
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Get inquiries error:", error);
      res.status(500).json({ 
        success: false, 
        message: "서버 오류가 발생했습니다." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
