import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';


export default function Register() {

    let password;

    const formSchema = Yup.object().shape({
        Name: Yup.string()
            .required("Name is required"),
        Email: Yup.string()
            .required("Email is required")
            .matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,"Email is not valid"),
        password: Yup.string()
          .required("Password is required")
          .min(4, "Password length should be at least 4 characters")
          .max(12, "Password cannot exceed more than 12 characters"),
        confirmPassword: Yup.string()
          .required("Confirm Password is required")
          .min(4, "Password length should be at least 4 characters")
          .max(12, "Password cannot exceed more than 12 characters")
          .oneOf([Yup.ref("password")], "Passwords do not match")
      });


    const {register, control, handleSubmit ,formState: { errors }, watch} = useForm({resolver: yupResolver(formSchema)});

    password = watch("password", "");
    
    const onSubmit = data => console.log(data);

    return (
        
        <div className="container w-50 mt-5 border border-primary rounded p-3">
        <h1 className="text-center">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="d-block">Name</label>
            <Controller
                name="Name"
                control={control}
                render={({ field }) => <input className="w-100" {...register("Name")} />} />
                <div className="text-danger">
                    {errors.Name?.message}   
                </div>
            <label className="d-block">Email</label>
            <Controller
                name="Email"
                control={control}
                render={({ field }) => <input className="w-100" {...register("Email")} />} />
                <div className="text-danger">
                    {errors.Email?.message}
                </div>
            <label className="d-block">Gender</label>    
            <Controller
                name="gender"
                control={control}
                render={({ field }) => <Select
                    {...field}
                    options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" }
                    ]} />} />
            <label className="d-block">Hobbies</label>        
            <Controller
                isMulti
                name="hobbies"
                control={control}
                className="basic-multi-select"
                classNamePrefix="select"
                render={({ field }) => <Select
                    {...field}
                    isMulti
                    name="colors"
                    options={[{ value: "Rowing", label: "Rowing" },
                        { value: "Football", label: "Football" }]}
                    className="basic-multi-select"
                    classNamePrefix="select" />} />
            <label className="d-block">Password</label>
            <Controller
                name="password"
                control={control}
                render={({ field }) => <input className="w-100" {...register("password")} />} />
                <div className="text-danger">
                    {errors.password?.message}
                </div>
            <label className="d-block">Confirm Password</label>
            <Controller
                name="password"
                control={control}
                render={({ field }) => <input className="w-100" {...register("confirmPassword")} />} />
                <div className="text-danger" >
                {errors.confirmPassword?.message}
                </div>
            <input className="w-100 btn btn-primary mt-4" type="submit" />
        </form>
        </div>
    );
}