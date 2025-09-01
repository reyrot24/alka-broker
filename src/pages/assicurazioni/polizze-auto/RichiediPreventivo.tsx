"use client";

import { useState } from "react";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import { polizzeAuto } from "../../../constants/content";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";

const FormElement = ({
  id,
  label,
  type,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="grid w-full items-center">
      <Label htmlFor={id} className="mb-2">
        {label}
      </Label>
      <Input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export const RichiediPreventivo = () => {
  const [form, setForm] = useState({
    targa: "",
    dataNascita: "",
    provincia: "",
    cellulare: "",
  });

  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  console.log(form);

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <h2 className="rb-5 mb-5 text-4xl font-medium md:mb-6 md:text-5xl">
            {polizzeAuto.section2.title}
          </h2>
        </div>
        <form
          className="mx-auto grid w-full max-w-md grid-cols-1 gap-6"
          onSubmit={handleSubmit}
        >
          {polizzeAuto.section2.form.map((el) => (
            <FormElement
              key={el.id}
              id={el.id}
              label={el.label}
              type={el.type}
              value={form[el.id as keyof typeof form]}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  [el.id]: e.target.value,
                }))
              }
            />
          ))}

          <div className="mb-3 flex items-start  space-x-2 text-sm md:mb-4">
            <Checkbox
              id="consenso"
              checked={acceptTerms}
              onCheckedChange={setAcceptTerms}
            />
            <Label htmlFor="consenso" className="cursor-pointer">
              {polizzeAuto.section2.acceptTerms}
            </Label>
          </div>
          <div className="text-center">
            <Button type="submit">{polizzeAuto.section2.button}</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
