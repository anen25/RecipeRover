import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const serviceOptions = [
  { id: "new-website", label: "홈페이지 신규 제작" },
  { id: "website-renewal", label: "기존 홈페이지 리뉴얼" },
  { id: "blog-marketing", label: "블로그 마케팅" },
  { id: "sns-marketing", label: "인스타그램/페이스북 마케팅" },
  { id: "video-production", label: "유튜브/틱톡 영상 제작" },
  { id: "consulting", label: "통합 마케팅 컨설팅" },
  { id: "other", label: "기타 문의" },
];

const budgetOptions = [
  { value: "under-500", label: "500만원 미만" },
  { value: "500-1000", label: "500만원 ~ 1000만원" },
  { value: "1000-2000", label: "1000만원 ~ 2000만원" },
  { value: "over-2000", label: "2000만원 이상" },
  { value: "undecided", label: "미정" },
];

const formSchema = z.object({
  company: z.string().min(1, "회사명/성함을 입력해주세요"),
  phone: z.string().min(1, "연락처를 입력해주세요"),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  services: z.array(z.string()).min(1, "최소 하나의 서비스를 선택해주세요"),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      phone: "",
      email: "",
      services: [],
      budget: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "문의가 성공적으로 전송되었습니다!",
        description: "빠른 시일 내에 연락드리겠습니다.",
      });
      form.reset();
      setSelectedServices([]);
    },
    onError: (error: any) => {
      toast({
        title: "전송 중 오류가 발생했습니다",
        description: error.message || "잠시 후 다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    const newServices = checked
      ? [...selectedServices, serviceId]
      : selectedServices.filter(id => id !== serviceId);
    
    setSelectedServices(newServices);
    form.setValue("services", newServices);
  };

  const showBudgetSection = selectedServices.some(service => 
    ["new-website", "website-renewal"].includes(service)
  );

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">어떤 도움이 필요하신가요?</h2>
            <p className="text-xl text-secondary">
              필요한 서비스를 모두 선택해주세요. 더 정확한 상담이 가능합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-light-surface border-light-border shadow-card">
              <CardContent className="p-8 md:p-12">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                    {/* Step 1: Service Selection */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6">필요한 서비스를 선택해주세요</h3>
                      <FormField
                        control={form.control}
                        name="services"
                        render={() => (
                          <FormItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {serviceOptions.map((service) => (
                                <FormItem
                                  key={service.id}
                                  className="flex items-center p-4 bg-white rounded-xl border border-light-border hover:border-brand-primary transition-colors shadow-soft hover:shadow-md"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={selectedServices.includes(service.id)}
                                      onCheckedChange={(checked) => 
                                        handleServiceChange(service.id, checked as boolean)
                                      }
                                      className="mr-3"
                                    />
                                  </FormControl>
                                  <FormLabel className="cursor-pointer flex-1 text-secondary font-medium">
                                    {service.label}
                                  </FormLabel>
                                </FormItem>
                              ))}
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Step 2: Conditional Budget Field */}
                    {showBudgetSection && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold mb-6">예상 예산이 어떻게 되시나요?</h3>
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full p-4 bg-white border-light-border text-secondary focus:border-brand-primary">
                                    <SelectValue placeholder="예산을 선택해주세요" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {budgetOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                      {option.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </motion.div>
                    )}

                    {/* Step 3: Basic Information */}
                    <div>
                      <h3 className="text-2xl font-bold mb-6">기본 정보를 입력해주세요</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-secondary font-medium">회사명/성함 *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="bg-white border-light-border text-primary focus:border-brand-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-secondary font-medium">연락처 *</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="tel"
                                  className="bg-white border-light-border text-primary focus:border-brand-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="mt-6">
                            <FormLabel className="text-secondary font-medium">이메일 *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="bg-white border-light-border text-primary focus:border-brand-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="mt-6">
                            <FormLabel className="text-secondary font-medium">상세 내용</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="프로젝트에 대한 자세한 내용을 알려주세요..."
                                rows={5}
                                className="bg-white border-light-border text-primary focus:border-brand-primary resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="bg-brand-primary hover:bg-blue-700 text-white px-12 py-4 text-lg font-bold transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-brand-primary/30 shadow-lg hover:shadow-xl rounded-full"
                        size="lg"
                      >
                        {submitMutation.isPending ? "전송 중..." : "문의 내용 보내기"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
