import { useForm } from "react-hook-form";
import { useState } from "react";
import FormChild from "./FormChild";
import axios from "axios";
import React from "react";

export default function FormParent() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSumbit, setIsSumbit] = useState(false);
    const [FormData, setFormData] = useState({});
    const [array, setArray] = useState([]);
    const handleRegistration = async (data) => {
        console.log(data);
        if (data != '')
            console.log(data);
        var parents;
        var currentParent;
        await axios.get(`https://localhost:44381/api/ParentControler`).then((res) => {
            parents = res.data;
            currentParent = res.data.find(p => sessionStorage.getItem(`tz`) == p.tz);
            console.log("current", currentParent)
            console.log("tzzz", currentParent.tz)
        })
            .catch(error => {
                console.log(error)
            })
        if (currentParent!==undefined) {
            console.log("currrent parent", currentParent)
            await axios.put(`https://localhost:44381/api/ParentControler/${currentParent.idParent}`, {
                FirstName: data.fname,
                LastName: data.lname, Tz: data.tz, Date: data.date, Hospital: parseInt(data.hmo), Min: parseInt(data.min)
            })
                .then(data => {
                    setArray(data.data)
                })
        }
        else {
            await axios.post("https://localhost:44381/api/ParentControler", {
                FirstName: data.fname,
                LastName: data.lname,
                Tz: data.tz,
                Date: data.date,
                Hospital: parseInt(data.hmo),
                Min: parseInt(data.min)
            })
                .then((r) => {
                    console.log("data", r.data);
                    setIsSumbit(true);
                }
                )
                .catch(error => console.log("error", error))
            setFormData(data);
            console.log("formData", FormData)
        }
    }
    const registerOptions = {
        fname: {
            required: "firstName is required",
            onChange: e => { sessionStorage.setItem(`fname`, e.target.value) }
        },
        lastName: {
            required: 'lastName is required',
            onChange: (e) => sessionStorage.setItem(`lname`, e.target.value)
        },
        Tz: {
            required: "Tz is required",
            maxLength: {
                value: 8
            },
            minLength: {
                value: 8,
                required: "Tz must have at least 8 characters"
            }, onChange: (e) => sessionStorage.setItem(`tz`, e.target.value)
        },
        date: {
            required: "date is required",
            onChange: (e) => sessionStorage.setItem(`date`, e.target.value)
        },
        min: {
            required: "sex is required",
            onChange: (e) => sessionStorage.setItem(`min`, e.target.value)
        },
        hmo: {
            required: "hmo is required",
            onChange: (e) => sessionStorage.setItem(`hmo`, e.target.value)
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <div>
                    {/* <div dir="rtl"  className="d-grid gap-2 col-6 mx-auto"></div> */}
                    <div>
                        <input name="fname" type="text" placeholder="first name" defaultValue={sessionStorage.getItem('fname')}
                            className="form-control"  {...register('fname', registerOptions.fname)} />
                        {errors?.fname && <p>{errors.fname.massage}</p>}
                    </div>
                    <input name="lname" type="text" defaultValue={sessionStorage.getItem('lname')}
                        placeholder="last name" className="form-control" {...register('lname', registerOptions.lastName)} />
                    <div>
                        <select name="hmo" {...register('hmo', registerOptions.hmo)}>
                            <option value="1">מאוחדת</option>
                            <option value="2">כללית</option>
                            <option value="3">מכבי</option>
                            <option value="4">לאומית</option>
                        </select>
                    </div>
                    <div>
                        <select name="min" {...register('min', registerOptions.min)}>
                            <option value="1">זכר</option>
                            <option value="2">נקבה</option>
                        </select>
                    </div>
                    <input name="tz" type="text" placeholder="tz" className="form-control" defaultValue={sessionStorage.getItem('tz')}
                        {...register('tz', registerOptions.Tz)} ></input>
                    <input name="date" type="date" placeholder="date" className="form-control"
                        defaultValue={sessionStorage.getItem('date')} {...register('date', registerOptions.date)} ></input>
                    <input name="numChildren" placeholder="num of children" type="number"{...register('numChildren', { required: "required" })} />
                    <input type="submit" className="btn btn-primary btn-lg"></input>
                </div>
            </form>
            {
                isSumbit && <FormChild t={FormData.tz} n={+FormData.numChildren} key={1}></FormChild>
            }
        </div>

    )

}