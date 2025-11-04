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
import { Send } from "lucide-react";
import { useTranslations, type Lang } from "@/i18n/utils";
import { useMemo } from "react";
import { toast } from "@/components/ui/toaster";

interface Props {
  lang: Lang;
}

export function ContactForm({ lang }: Props) {
  const t = useTranslations(lang);
  const ui = t("contact").form;

  const formSchema = useMemo(() => {
    return z.object({
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
      projectType: z
        .string()
        .refine(
          (val) =>
            [
              "New Website",
              "E-commerce Store",
              "Website Redesign",
              "Web Application",
              "Performance Optimization",
              "Other",
            ].includes(val),
          { message: ui.projectTypeErrorMessage },
        ),

      budget: z
        .string()
        .refine(
          (val) =>
            [
              "Under 50,000 SEK",
              "50,000 - 100,000 SEK",
              "100,000 - 200,000 SEK",
              "200,000+ SEK",
            ].includes(val),
          { message: ui.budgetErrorMessage },
        ),
      message: z.string().min(10, {
        message: ui.messageErrorMessage,
      }),
    });
  }, [lang]);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast(ui.successMessage.title, {
      description: ui.successMessage.description,
    });
    // eslint-disable-next-line no-undef
    console.log({ values });

    form.reset();
  }
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <FormControl>
                  <SelectTrigger
                    className={
                      fieldState.error ? "border-destructive w-full" : "w-full"
                    }
                  >
                    <SelectValue placeholder={ui.projectTypePlaceholder} />
                  </SelectTrigger>
                </FormControl>
                <FormMessage />
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{ui.projectTypePlaceholder}</SelectLabel>
                    {ui.projectTypeOptions.map(
                      (option: string, index: number) => {
                        const values = [
                          "New Website",
                          "E-commerce Store",
                          "Website Redesign",
                          "Web Application",
                          "Performance Optimization",
                          "Other",
                        ];
                        return (
                          <SelectItem key={values[index]} value={values[index]}>
                            {option}
                          </SelectItem>
                        );
                      },
                    )}
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
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...field}
              >
                <FormControl>
                  <SelectTrigger
                    className={`w-full ${fieldState.error ? "border-destructive" : ""}`}
                  >
                    <SelectValue placeholder={ui.budgetPlaceholder} />
                  </SelectTrigger>
                </FormControl>
                <FormMessage />
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{ui.budgetPlaceholder}</SelectLabel>
                    <SelectItem value="Under 50,000 SEK">
                      {ui.budgetOptions[0]}
                    </SelectItem>
                    <SelectItem value="50,000 - 100,000 SEK">
                      50,000 - 100,000 SEK
                    </SelectItem>
                    <SelectItem value="100,000 - 200,000 SEK">
                      100,000 - 200,000 SEK
                    </SelectItem>
                    <SelectItem value="200,000+ SEK">200,000+ SEK</SelectItem>
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
