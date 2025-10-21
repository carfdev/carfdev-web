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

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
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
      { message: "Please select a project type" },
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
      { message: "Please select a budget range" },
    ),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
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
    // eslint-disable-next-line no-undef
    console.log({ values });
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
                <FormLabel>First Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Adam" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Smith" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input placeholder="adam@example.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Carfdev" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectType"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Project Type *</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    className={`w-full ${fieldState.error ? "border-destructive" : ""}`}
                  >
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select project type</SelectLabel>
                      <SelectItem value="New Website">New Website</SelectItem>
                      <SelectItem value="E-commerce Store">
                        E-commerce Store
                      </SelectItem>
                      <SelectItem value="Website Redesign">
                        Website Redesign
                      </SelectItem>
                      <SelectItem value="Web Application">
                        Web Application
                      </SelectItem>
                      <SelectItem value="Performance Optimization">
                        Performance Optimization
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Budget Range *</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger
                    className={`w-full ${fieldState.error ? "border-destructive" : ""}`}
                  >
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select budget range</SelectLabel>
                      <SelectItem value="Under 50,000 SEK">
                        Under 50,000 SEK
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
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project goals, requirements, and timeline..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full">
          <Send />
          Send Message
        </Button>
      </form>
    </Form>
  );
}
