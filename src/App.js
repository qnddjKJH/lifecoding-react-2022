import './App.css';

function Header(props) {
  console.log("props", props, props.title);
  return (
      <header>
        <h1><a href='/' onClick={function(event) {
          event.preventDefault();
          // 기본 동작 방지 즉 a 태그의 기본 동작을 방지
          // 클릭 해도 '/' 링크 즉 리로드가 일어나지 않는다
          props.onChangeMode(); // Header component 로 넘어온 이벤트 기능을 사용가능
        }}>{props.title}</a></h1>
      </header>
  );
}

function Nav(props) {
  const list = [];

  for(let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    list.push(<li key={t.id}>
        <a id={t.id} href={'/read/' + t.id} onClick={ event => {
          event.preventDefault();
          props.onChangeMode(event.target.id);
        }}>{t.title}</a>
      </li>)
  }

  return(
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  );
}

function Article(props) {
  return(
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    {id: 1, title: "html", body:"html is..."},
    {id: 2, title: "css", body:"css is..."},
    {id: 3, title: "javascript", body:"javascript is..."}
  ]
  return (
    <div className="App">
      <Header title="REACT" onChangeMode={function () {
        alert('Header');
      }}></Header>
      <Nav topics={topics} onChangeMode={(id) => {
        alert(id);
      }} ></Nav>
      <Article title="Welcome" body="Hello, Boong"></Article>
    </div>
  );
}

export default App;
