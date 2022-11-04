import React from "react"

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  const Header = props =>
  <h1>{props.course.name}</h1>

  const Total = (props) => {
    const parts = props.course.parts.map(course => course.exercises)

    return (
      <h3>Total of {parts.reduce((s, p) => s + p)} exercises</h3>
    )
  }

  const Part = props =>
    <p>{props.name} {props.exercises}</p>

  const Content = (props) => {
      return (
          <div>
              {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}  
          </div>
      )
  }
  const Course = (props) => {  
      console.log(props)  

      return (
          <div>
              <Header course={props.course} />
              <Content course={props.course} />
              <Total course={props.course} />
          </div>
      )
  }

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => <Course key = {courses.id} course={course} />)}
    </div>
  )
}

export default App
