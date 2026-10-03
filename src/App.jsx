const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
      <p>Course Information</p>
    </header>
  )
}

const Part = (props) => {
  return (
    <div className="part">
      <span>{props.name}</span>
      <span>{props.exercises} units</span>
    </div>
  )
}

const Content = (props) => {
  return (
    <div className="content">
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const total =
    props.parts[0].exercises +
    props.parts[1].exercises +
    props.parts[2].exercises

  return (
    <div className="total">
      <strong>Total Units</strong>
      <strong>{total}</strong>
    </div>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'Industry Elective 1',
    parts: [
      {
        name: 'React',
        exercises: 3
      },
      {
        name: 'Javascript',
        exercises: 3
      },
      {
        name: 'Tailwind',
        exercises: 3
      }
    ]
  }

  return (
    <div className="app">
      <Header course={course.name} />

      <main>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </main>

      <Footer
        name="KEITH ALLEN A. LARIEGO"
        courseCode="CSIT340"
        section="G8"
      />
    </div>
  )
}

export default App