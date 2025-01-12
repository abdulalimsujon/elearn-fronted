import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "./InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "username must be 3 characters length" })
    .max(20, { message: "username will be 20characters maximum" }),
  email: z.string().email({ message: "must be valid email" }),
  password: z
    .string()
    .min(8, { message: "password will be maximum 8 characters longs" }),
  firstName: z.string().min(1, { message: "first name is required" }),
  lastName: z.string().min(1, { message: "last name is required" }),
  bloodType: z.string().min(1, { message: "Blood type is required" }),
  phone: z.string().min(1, { message: "phone  is required" }),
  address: z.string().min(1, { message: "Address  is required" }),
  birthday: z.date({ message: "Birthday date is required" }),
  sex: z.enum(["male", "female"], { message: "sex is required" }),
  img: z.instanceof(File, { message: "file is required" }),
});
type inputs = z.infer<typeof schema>;
const StudentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputs>({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">create a Student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <InputField
          label="username"
          name="username"
          type="text"
          register={register}
          defaultValue={data?.username}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          register={register}
          defaultValue={data?.email}
          error={errors?.email}
        />
        <InputField
          label="password"
          name="password"
          type="password"
          register={register}
          defaultValue={data?.password}
          error={errors?.password}
        />
      </div>

      <span className="text-xs text-gray-400 font-semibold">
        personal Information
      </span>
      <div className="flex flex-row flex-wrap justify-between gap-4">
        <InputField
          label="First name"
          name="firstName"
          type="text"
          register={register}
          defaultValue={data?.firstName}
          error={errors?.firstName}
        />
        <InputField
          label="lastName"
          name="lastName"
          type="text"
          register={register}
          defaultValue={data?.lastName}
          error={errors?.lastName}
        />
        <InputField
          label="phone"
          name="phone"
          type="text"
          register={register}
          defaultValue={data?.phone}
          error={errors?.phone}
        />{" "}
        <InputField
          label="Address"
          name="address"
          type="text"
          register={register}
          defaultValue={data?.address}
          error={errors?.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          type="text"
          register={register}
          defaultValue={data?.bloodType}
          error={errors?.bloodType}
        />
        <InputField
          label="Birth day"
          name="birthday"
          type="date"
          register={register}
          defaultValue={data?.birthday}
          error={errors?.address}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">sex</label>
          <select
            {...register("sex")}
            className="ring-[1.5px] ring-gray-300 p-3 rounded-md text-sm w-full"
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors?.sex?.message && (
            <p className="text-xs text-red-400">
              {errors?.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label
            className="text-xs text-gray-500 flex items-center gap-2"
            htmlFor="img"
          >
            <Image src="/upload.png" width={28} height={28} alt="" />
            <span>upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {/* {errors.img.message.toString()} */}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
