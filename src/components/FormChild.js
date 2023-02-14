import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Thenk from './Thenk';
export default function FormChild({ t, n }) {
    const [isSubmit, setIsSubmit] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [arr, setArr] = useState([]);

    const h = async (data) => {
        setIsSubmit(true);
        var parents;
        var currentParent;
        console.log(data);
        console.log("n", n);
        console.log("t", t);
        var a;
        var childrenArr;
        // await axios.get(`https://localhost:44381/api/ChildrenControler`).then((res) => {
        //     parents = res.data;
        //     currentParent = res.data.find(p => sessionStorage.getItem(`tz`) === p.tz);
        //     console.log("current", currentParent)
        //     console.log("tz",currentParent.tz)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
        // await  axios.put(`https://localhost:44381/api/ChildrenControler/${currentParent.idChaild}`,{Name:sessionStorage.getItem(`name`),
        //       TzChild:data.tz,BirthDate:data.date})
        // .then(data => {
        //     setArray(data.data)
        // })
        await axios.get(`https://localhost:44381/api/ParentControler`).then((res) => {
            parents = res.data;
            currentParent = res.data.find(p => t === p.tz);
            console.log("current", currentParent)
        })

        for (let index = 0; index < n; index++) {
            // const current={
            //     Name: sessionStorage.getItem(`name${index}`),
            //     TzChild: sessionStorage.getItem(`tz${index}`),
            //     BirthDate: sessionStorage.getItem(`date${index}`)
            // }
            childrenArr = await axios.get(`https://localhost:44381/api/ChildrenControler`)
            //  .then((res) => {
            //     //      parents = res.data;
            //     //    var childExists = res.data.find(p => sessionStorage.getItem(`tz`) === p.tz);
            //     //     console.log("current", currentParent)
            //     //     console.log("tz",currentParent.tz)
            // })
            // .catch(error => {
            //     console.log(error)
            // })
            console.log("childrenArr",childrenArr)
            var childExists = childrenArr.data.find(p => sessionStorage.getItem(`tz${index}`) === p.tzChild);
            console.log("childExists",childExists)
            if (childExists === undefined) {
                axios.post("https://localhost:44381/api/ChildrenControler",
                    {
                        IdParent: currentParent.idParent,
                        Name: sessionStorage.getItem(`name${index}`),
                        TzChild: sessionStorage.getItem(`tz${index}`),
                        BirthDate: sessionStorage.getItem(`date${index}`)
                    })
                    .then((r) => {
                        console.log(r.data)
                    })
            }
            else {
                await axios.put(`https://localhost:44381/api/ChildrenControler/${childExists.idChild}`, {
                    IdParent:currentParent.idParent,
                    Name: sessionStorage.getItem(`name${index}`),
                    TzChild: data.tz, 
                    BirthDate: data.date
            
                })
                    .then(data => {
                        //  setArray(data.data)
                    })
            }

        }
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(h)}>
                {
                    Array(n).fill(0).map((p, index) =>
                        <div key={index}>
                            <p>ילד {index + 1} </p>

                            {/* <div className="form-control">
                                             <input name={`firstName${index}`} className="form-control" placeholder=" Name" type="text"
                                                 defaultValue={sessionStorage.getItem('firstName')}
                                                 {...register('firstName', {
                                                     required: "name is required", onChange: event => { sessionStorage.setItem('firstName', event.target.value) }
                                                 })}
                                            />
                                             {errors?. firstName && <div >{errors.firstName.message}</div>}
                                         </div>
                            <div className="form-control">
                                             <input name={`Tz${index}`} className="form-control" placeholder="Tz" type="text"
                                                 defaultValue={sessionStorage.getItem('Tz')}
                                                 {...register('Tz', {
                                                     required: "Tz is required", onChange: event => { sessionStorage.setItem('Tz', event.target.value) }
                                                 })}
                                            />
                                             {errors?. Tz && <div >{errors.Tz.message}</div>}
                                         </div>
                            <div className="form-control">
                                             <input name={`Date${index}`} className="form-control" placeholder="Date" type="Date"
                                                 defaultValue={sessionStorage.getItem('Date')}
                                                 {...register('Date', {
                                                     required: "Date is required", onChange: event => { sessionStorage.setItem('Date', event.target.value) }
                                                 })}
                                            />
                                             {errors?. Date && <div >{errors.Date.message}</div>}
                                         </div> */}

                            {/* { <div dir="rtl"  className="d-grid gap-2 col-6 mx-auto"></div> } */}

                            <input name={`name${index}`} type="text" placeholder=" name" className="form-control"
                                {...register(`name${index}`, {
                                    required: "name is required",
                                    onChange: (e) => sessionStorage.setItem(`name${index}`, e.target.value)
                                })} />
                            <input name={`tz${index}`}
                                type="text" placeholder="tz" className="form-control"
                                {...register('tz', {
                                    required: "tz is required",
                                    onChange: (e) => sessionStorage.setItem(`tz${index}`, e.target.value)
                                })} />
                            <input name={`date${index}`}
                                type="date" placeholder="date" className="form-control"
                                {...register('date', {
                                    required: "date is required",
                                    onChange: (e) => sessionStorage.setItem(`date${index}`, e.target.value)
                                })} />
                        </div>)
                }
                <input type="submit" className="btn btn-primary btn-lg" />
            </form>
            {
                isSubmit && <Thenk></Thenk>
            }
        </div>
    )
}