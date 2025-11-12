import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CircleX, Send } from "lucide-react";
import { toast } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Form as FormType } from "@/types/index.interface";

import type { SendContactResponse } from "@/types/axios.interface";
import { request } from "@/lib/axios";

interface Props {
  ui: FormType;
}

const PROJECT_TYPES = [
  "new-website",
  "e-commerce",
  "redesign",
  "web-app",
  "optimization",
  "other",
] as const;

const BUDGET_RANGES = [
  "under-50k",
  "50k-100k",
  "100k-200k",
  "200k-plus",
] as const;

export function ContactForm({ ui }: Props) {
  const formSchema = z.object({
    firstName: z.string().min(2, {
      message: ui.firstNameErrorMessage,
    }),
    lastName: z.string().min(2, {
      message: ui.lastNameErrorMessage,
    }),
    email: z.string().email({
      message: ui.emailErrorMessage,
    }),
    companyName: z.string().optional(),
    projectType: z.enum(PROJECT_TYPES, {
      errorMap: () => ({ message: ui.projectTypeErrorMessage }),
    }),
    budget: z.enum(BUDGET_RANGES, {
      errorMap: () => ({ message: ui.budgetErrorMessage }),
    }),
    message: z.string().min(10, {
      message: ui.messageErrorMessage,
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      projectType: undefined,
      budget: undefined,
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await request<SendContactResponse>("post", "/email/send-contact", values);
      toast(ui.successMessage.title, {
        description: ui.successMessage.description,
      });
      form.reset();
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast(ui.errorMessage.title, {
        description: ui.errorMessage.description,
        icon: <CircleX className="size-4" />,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ui.firstNameLabel} *</FormLabel>
                <FormControl>
                  <Input placeholder={ui.firstNamePlaceholder} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ui.lastNameLabel} *</FormLabel>
                <FormControl>
                  <Input placeholder={ui.lastNamePlaceholder} {...field} />
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
            <FormItem>
              <FormLabel>{ui.emailLabel} *</FormLabel>
              <FormControl>
                <Input
                  placeholder={ui.emailPlaceholder}
                  {...field}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{ui.companyNameLabel}</FormLabel>
              <FormControl>
                <Input placeholder={ui.companyNamePlaceholder} {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectType"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>{ui.projectTypeLabel} *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      fieldState.error ? "border-destructive" : "",
                      "w-full",
                    )}
                  >
                    <SelectValue placeholder={ui.projectTypePlaceholder} />
                  </SelectTrigger>
                </FormControl>
                <FormMessage />
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{ui.projectTypePlaceholder}</SelectLabel>
                    {PROJECT_TYPES.map((value, index) => (
                      <SelectItem key={value} value={value}>
                        {ui.projectTypeOptions[index]}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>{ui.budgetLabel} *</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <FormControl>
                  <SelectTrigger
                    className={cn(
                      fieldState.error ? "border-destructive" : "",
                      "w-full",
                    )}
                  >
                    <SelectValue placeholder={ui.budgetPlaceholder} />
                  </SelectTrigger>
                </FormControl>
                <FormMessage />
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{ui.budgetPlaceholder}</SelectLabel>
                    {BUDGET_RANGES.map((value, index) => (
                      <SelectItem key={value} value={value}>
                        {ui.budgetOptions[index]}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{ui.messageLabel} *</FormLabel>
              <FormControl>
                <Textarea placeholder={ui.messagePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full cursor-pointer">
          <Send />
          {ui.submitButton}
        </Button>
      </form>
    </Form>
  );
}
