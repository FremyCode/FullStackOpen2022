import React from "react"

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
      
    ],
  }

  const Course = (props) => {

    const Content = () => {
      const Part = (props) => {
        return (
          <p>
            {props.parts.name} {props.parts.exercises}
          </p>
        )
      }

      return (
        <div>
          <Part parts={course.parts[0]} exercises={course.parts[0].exercises} />
          <Part parts={course.parts[1]} exercises={course.parts[1].exercises} />
          <Part parts={course.parts[2]} exercises={course.parts[2].exercises} />
        </div>
      )
    }


    const Header = (props) => {
      return (
        <div>
          <h1>{props.course}</h1>
        </div>
      )
    }

    const Total = () => {

     const initialValue = 0;
     let partsArray = []
     for (var i = 0; i < course.parts.length; i++){
      partsArray[i] = course.parts[i].exercises
     }
     console.log(partsArray)
    
     const sumOfExercises = partsArray.reduce((prevValue, currValue) => prevValue + currValue, initialValue)
     
      return (
        <div>
          <h3>Total of {sumOfExercises} exercises</h3>
        </div>
      )
      
    }


    return (
      <div>
        <Content/>
        <Header/>
        <Total/>
      </div>
    )

  }


  return (
    <div>
      <Course Header={course.name} Content={course.parts} Parts={course.parts} Total={course.parts}/>
    </div>
  )
}

export default App
