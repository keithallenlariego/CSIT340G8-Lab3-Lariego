const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
  const course = 'CSIT 340'

  const part1 = {
    name: 'Web Development',
    exercises: 3
  }

  const part2 = {
    name: 'Database Management',
    exercises: 3
  }

  const part3 = {
    name: 'Object-Oriented Programming',
    exercises: 3
  }

  const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total total={total} />
    </div>
  )
}

export default App