import React, { useState } from 'react';
import './Login.css';

const Login=()=> {
  const[page,setpage]=useState(1)
  const[ans,setAns]=useState()
  const handleclick=()=>
  {
    setpage(page+1);
  }

  let selectoption=(s)=>{
    setAns({
      ...ans,
      [s.target.name]:s.target.value

    })
  }
  const result=()=>{
    let score=0;
    quiz.map((answer)=>{
      if(ans[answer.id]==answer.correct_answer)
        {score++;}
    })
    return score;
  }
  const quiz = [
          {
            "id": "1",
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Rome"],
            "correct_answer": "Paris"
          },
          {
            "id": "2",
            "question": "Which planet is known as the Red Planet?",
            "options": ["Mars", "Venus", "Jupiter", "Saturn"],
            "correct_answer": "Mars"
          },
          {
            "id": "3",
            "question": "What is the largest mammal?",
            "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            "correct_answer": "Blue Whale"
          },
          {
            "id": "4",
            "question": "Who wrote the play 'Romeo and Juliet'?",
            "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
            "correct_answer": "William Shakespeare"
          },
          {
            "id": "5",
            "question": "What is the chemical symbol for gold?",
            "options": ["Go", "Au", "Gd", "Gl"],
            "correct_answer": "Au"
          }
  ]
  return (
    <>
    {page===1 && (
      <section className="text-center text-lg-start">
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card cascading-right" style=
                {{background: "hsla(0, 0%, 100%, 0.55)"}}
                >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                      </div>
                    </div>
                  </div>
    
                  
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>
    
                  
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleclick}>
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
    
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow-4 img"
              alt="" />
          </div>
        </div>
      </div>
      
    </section>
    )}
    {page===2 && (
      <section>
        <h1 style={{textAlign:'center',color:'white',backgroundColor:'magenta'}}>Quiz Page</h1>
        {quiz.map((item)=>(
          <>
          <h4>{item.id}. {item.question}</h4>
          
          {item.options.map((val)=>(
            <ul>
              <li>
                <div>
                  <input type='radio' name={item.id} value={val} onClick={selectoption}></input>
                  <label>{val}</label>
                </div>
              </li>
            </ul>
          ))}
          </> 
        ))}
        <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
      </section> 
    )}
    {page===3 && (
      <section><h4>Quiz Complete</h4>
        <h5>Your Score : {result()}</h5>
      </section>
    )}
    </>
  )
}

export default Login;