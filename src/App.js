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

  const Course = (props) => {
    const Content = (props) => {
      const Part = (props) => {
        return (
          <div>
            {courses.map((course) => 
              (course.parts.map((part) => 
                (<p key={part.id}>{part.name} {part.exercises}</p>))
              ))}
          </div>
        )
      }

      return (
        <div>
          <Part/>
        </div>
      )
    }

    const Header = (props) => {
      /* console.log("Header courses", courses) */

      return (
        <div>
          {courses.map((course) => (
            <h2 key={course.id}>{course.name}</h2>
          ))}
        </div>
      )
    }

    const Total = () => {
      const initialValue = 0
      console.log("Courses", courses)
      let partsArray = []

      for (var j = 0; j < courses.length; j++)

      for (var i = 0; i < courses[j].parts.length; i++){
      partsArray.push(courses[j].parts[i].exercises)
     }


     
      const sumOfExercises = partsArray.reduce(
        (prevValue, currValue) => prevValue + currValue,
        initialValue
      )

      return (
        <div>
          <h3>Total of {sumOfExercises} exercises</h3>
        </div>
      )
    }

    return (
      <div>
        <Header course={courses} />
        <Content parts={courses.parts} />
        <Total parts={courses.parts} />
      </div>
    )
  }

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={courses}/>
    </div>
  )
}

export default App
