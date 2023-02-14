// import React from 'react';
//  import axios from 'axios';
//  export default class MyList extends React.Component {
//   state = {
//   persons: []
//   }
//  componentDidMount() {
//   axios.get(`https://jsonplaceholder.typicode.com/users`)
//   .then(response => {
// const users = response.data;
//   this.setState ({users});
//   })
//   }
//  render() {
//   return (
//   < ul >
//   {this.state.users.map (user =>  {user.name}   )}
//   < /ul >
//   )
//   }
//  }

//     user = axios.get('http://localhost:3002/users/'+id).then(r => r.data)
// axios.put('http://localhost:3002/users/'+id,{
//             hostname: user.hostname,
//             password: user.password,
//             command: 'stop'
//          }) 

// const putH={
//  parent=axios.get("http://localhost:3000/parent/"+id).then(r=>r.data)
//  axios.put("http://localhost:3000/parent/"+id,{
//     fname:parent.fname,
//     Tz:parent.Tz,
//     date:parent.date
// })

// }



// setTzParent(props.x);

// arrContext.map((p, index) => {
//     if (p.Tz == tzParent)
//         setIdParent(p.id);
// })

// axios.post("https://localhost:44381/api/ChildrenControler", {
//     IdParent:idParent,
//     fname: data.fname,
//     Tz: data.Tz,
//     date: data.date
// })

//  const F= arrCtx.array.map((p, index) =>
//  {     if(p.tz==FormData.tz)
//       <p>  {p.firstName}+{p.lastName}</p>
//  }    )
// <div>
//   {/* <p>hello</p> */}
//   {/* <p>tami</p> */}
//   {
//     arrCtx.map((p,index)=>{
//        if(p.tz==FormData.tz)
//        <p>{p.firstName}+{p.lastName}</p>
//     })
//   }
// </div>
// const userNames = users.map(({ name }) => name)


{/* {
                            let item = [...this.state.items];
                           } */}

{/* // // 2. Make a shallow copy of the item you want to mutate
    // let item = {...items[1]};
    // // 3. Replace the property you're intested in
    // item.name = 'newName';
    // // 4. Put it back into our array. N.B. we *are* mutating the array here, 
    // //    but that's why we made a copy first
    // items[1] = item;
    // // 5. Set the state to our new copy
    // this.setState({items}); */}
{/* <div className='input-group mb-3'>
                        <span className='input-group-text'>שם פרטי</span>
                        <input name="firstName" className="form-control" placeholder="שם פרטי" type="text"
                            defaultValue={sessionStorage.getItem('fNameP')}
                            {...register('firstName', {
                                required: "שדה חובה", onChange: event => { sessionStorage.setItem('fNameP', event.target.value) }
                            })}
                        />
                        {errors?. firstName && <div >{errors.firstName.message}</div>}
                        </div>*/}

                        // return (
                        //     <div>
                        //         <form onSubmit={handleSubmit(handleRegistration)}>
                        //             <div>
                        //                 {/* <div dir="rtl"  className="d-grid gap-2 col-6 mx-auto"></div> */}
                        //                 {/* <div>
                        //                     <input name="fname" type="text" placeholder="first name" defaultValue={sessionStorage.getItem('fname')}
                        //                         className="form-control"  {...register('fname', registerOptions.fname)} />
                        //                     {errors?.fname && <p>{errors.fname.massage}</p>}
                        //                 </div> */}
                    
                        //                 <div className="form-control">
                        //                     <input name="firstName" className="form-control" placeholder="first name" type="text"
                        //                         defaultValue={sessionStorage.getItem('fNameP')}
                        //                         {...register('firstName', {
                        //                             required: "firstName is required", onChange: event => { sessionStorage.setItem('fNameP', event.target.value) }
                        //                         })}
                        //                     />
                        //                     {errors?. firstName && <div >{errors.firstName.message}</div>}
                        //                     </div>
                        //                  <div className="form-control">
                        //                     <input name="lastName" className="form-control" placeholder="last Name" type="text"
                        //                         defaultValue={sessionStorage.getItem('lastName')}
                        //                         {...register('lastName', {
                        //                             required: "lastName is required", onChange: event => { sessionStorage.setItem('lastName', event.target.value) }
                        //                         })}
                        //                     />
                        //                     {errors?. lastName && <div >{errors.lastName.message}</div>}
                        //                     </div>
                        //                 {/* <input name="lname" type="text" defaultValue={sessionStorage.getItem('lname')}
                        //                     placeholder="last name" className="form-control" {...register('lname', registerOptions.lastName)} /> */}
                        //                      {/* <div className="form-control">
                        //                     <input name="hmo" className="form-control" placeholder="hmo" type="text"
                        //                         defaultValue={sessionStorage.getItem('hmo')}
                        //                         {...register('hmo', {
                        //                             required: "hmo is required", onChange: event => { sessionStorage.setItem('hmo', event.target.value) }
                        //                         })}
                        //                     />
                        //                     {errors?. lastName && <div >{errors.lastName.message}</div>}
                        //                     </div> */}
                        //                 <div>
                        //                     <select name="hmo" className="form-control" placeholder="hmo" type="text" defaultValue={sessionStorage.getItem('hmo')} 
                        //                      {...register('hmo', {
                        //                             required: "hmo is required", onChange: event => { sessionStorage.setItem('hmo', event.target.value) }
                        //                         })}>
                        //                         <option value="1">מאוחדת</option>
                        //                         <option value="2">כללית</option>
                        //                         <option value="3">מכבי</option>
                        //                         <option value="4">לאומית</option>
                        //                     </select>
                        //                 </div>
                        //                 <div>
                        //                     <select name="sex" className="form-control" placeholder="sex"  defaultValue={sessionStorage.getItem('sex')} 
                        //                      {...register('sex', {
                        //                             required: "sex is required", onChange: event => { sessionStorage.setItem('sex', event.target.value) }
                        //                         })}>
                        //                          <option value="1">זכר</option>
                        //                         <option value="2">נקבה</option>
                        //                     </select>
                        //                 </div>
                        //                 {/* <div>
                        //                     <select name="min" {...register('min', registerOptions.min)}>
                        //                         <option value="1">זכר</option>
                        //                         <option value="2">נקבה</option>
                        //                     </select>
                        //                 </div> */}
                        //                  <div className="form-control">
                        //                     <input name="tz" className="form-control" placeholder="tz" type="text"
                        //                         defaultValue={sessionStorage.getItem('tz')}
                        //                         {...register('tz', {
                        //                             required: "tz is required", onChange: event => { sessionStorage.setItem('tz', event.target.value) }
                        //                         })}
                        //                     />
                        //                     {errors?. tz && <div >{errors.tz.message}</div>}
                        //                     </div>
                        //                     <div className="form-control">
                        //                     <input name="date" className="form-control" placeholder="date" type="date"
                        //                         defaultValue={sessionStorage.getItem('date')}
                        //                         {...register('date', {
                        //                             required: "date is required", onChange: event => { sessionStorage.setItem('date', event.target.value) }
                        //                         })}
                        //                     />
                        //                     {errors?. date && <div >{errors.date.message}</div>}
                        //                     </div>
                        //                 {/* <input name="tz" type="text" placeholder="tz" className="form-control" defaultValue={sessionStorage.getItem('tz')}
                        //                     {...register('tz', registerOptions.Tz)} ></input> */}
                        //                 {/* <input name="date" type="date" placeholder="date"  className="form-control"
                        //                    defaultValue={sessionStorage.getItem('date')} {...register('date', registerOptions.date)} ></input> */}
                        //                 <input name="numChildren" placeholder="num of children" type="number"{...register('numChildren', { required: "required" })} />
                        //                 {/* <button className="btn btn-primary btn-lg" onClick={sayHello}>לדף ההנחיות:</button> */}
                        //                 <input type="submit" className="btn btn-primary btn-lg"></input>
                    
                    
                        //             </div>
                        //         </form>
                        //         {
                        //             isSumbit && <FormChild t={FormData.tz} n={FormData.numChildren} key={1}></FormChild>
                        //         }
                        //     </div>
                    
                        // )
                    

                        