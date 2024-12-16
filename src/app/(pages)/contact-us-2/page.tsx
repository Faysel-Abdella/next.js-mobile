"use client"

import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { ImageIcon, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CustomAlert, CustomAlertTrigger, CustomAlertContent, CustomAlertAction, useAlert } from '@/components/custom-alert'

const formSchema = z.object({
  title: z.string().min(1, {
    message: "제목을 입력해주세요.",
  }),
  content: z.string().min(1, {
    message: "내용을 입력해주세요.",
  }),
  images: z.array(z.any()).optional(),
})

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      images: [],
    },
    mode: "onChange",
  })

  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const isFormValid = form.formState.isValid;
  const [formValues, setFormValues] = useState<z.infer<typeof formSchema> | null>(null);

  const { openAlert } = useAlert();

  function onSubmit(values: z.infer<typeof formSchema>) { 
    setFormValues(values);
    openAlert('success-alert');
    console.log(values);
  }

  useEffect(() => {
    return () => {
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview))
    }
  }, [imagePreviews])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);
    form.setValue('images', [...(form.getValues('images') || []), ...files]);
    form.trigger('images');
  }

  const removeImage = (index: number) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
    const updatedImages = (form.getValues('images') || []).filter((_, i) => i !== index);
    form.setValue('images', updatedImages);
    form.trigger('images');
  }

  function SuccessAlert() {
    return (
      <CustomAlertContent alertId="success-alert" className="max-w-xs flex flex-col justify-center gap-7 items-center w-full">
        <Image src='/images/success-icon.svg' alt="success" width={48} height={48} className="size-12 self-center"/>
        <p className="text-center text-black">등록이 완료 되었어요.</p>
        <div className="flex justify-center space-x-2.5 w-full">
          <CustomAlertAction className="w-full bg-primary text-white font-medium">확인</CustomAlertAction>
        </div>
      </CustomAlertContent>
    );
  }

  return (
      <div className="bg-white relative -mt-5 h-screen">
        <div className="flex flex-col justify-between items-center text-[#4D4D4D]">
          <nav className="w-full flex flex-col gap-4">
            <div className="w-full pt-10 px-4 mx-auto flex justify-between items-center ">
              <Link href={".."} className="flex items-center gap-4">
                <Icons.arrowLeft className="size-5" />
                <span className="text-lg">문의하기</span>
              </Link>
            </div>
            <Separator />
          </nav>
          <div className="w-full h-full p-5 space-y-4 flex flex-col ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="relative h-[calc(90.5vh-2rem)]  flex flex-col justify-between">
                <div className="space-y-5 min-h-calc">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem className="gap-2.5">
                        <FormLabel className="text-[#4D4D4D]">제목</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="제목을 입력해 주세요" 
                            className="h-9 px-3 border-[#DADFE2] text-base placeholder:text-xs rounded-md placeholder:text-[#ADADAD] placeholder:font-light" 
                            {...field} 
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#4D4D4D]">문의 내용</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="내용을 입력해 주세요" 
                            className="min-h-[180px] px-3 resize-none border-[#DADFE2] py-3 text-base placeholder:text-xs rounded-md placeholder:text-[#ADADAD] placeholder:font-light"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <div className="flex flex-wrap gap-2 items-start">
                            <div className="relative">
                              <Input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                                id="image-upload"
                                multiple
                              />
                              <label
                                htmlFor="image-upload"
                                className="flex flex-col items-center justify-center w-[72px] h-[72px] bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                              >
                                <ImageIcon className="w-6 h-6 text-gray-500" />
                                <span className="mt-1 text-sm text-gray-500">사진</span>
                              </label>
                            </div>
                            {imagePreviews.map((preview, index) => (
                              <div key={index} className="relative w-[72px] h-[72px] mx-1">
                                <Image
                                  width={100}
                                  height={100}
                                  src={preview}
                                  alt={`Preview ${index + 1}`}
                                  className="w-full h-full object-contain rounded-lg bg-[#FFE9E9]"
                                />
                                <button
                                  type="button"
                                  onClick={() => removeImage(index)}
                                  className="absolute -top-1 -right-1 w-5 h-5 bg-[#4D4D4D] rounded-full flex items-center justify-center"
                                >
                                  <X className="size-4 text-white" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <Button 
                  disabled={!isFormValid}
                  type="submit" 
                  className={cn(
                    "w-full h-11  text-base mb-2",
                    isFormValid ? "bg-primary" : "disabled:opacity-100 bg-[#ADADAD]"
                  )}
                >
                  완료
                </Button>
              </form>
            </Form>

            <SuccessAlert />
          </div>
        </div>
      </div>

  );
}