import React from 'react';

import Header from './functioncomponents/Header';
import MainContent from './functioncomponents/MainContent';
import Footer from './functioncomponents/Footer';
import TodoItem from './functioncomponents/TodoItem';
import Greetings from './Greetings';
import ContactCard from './functioncomponents/ContactCard';
import Joke from './functioncomponents/Joke';
import jokesData from './data/jokesData';
import productsData from './data/vschoolProducts';
import todosData from './data/todosData';

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Greetings />
    </div>
  );
}


export function Pet() {
  return (
    <div className="contacts">
      <ContactCard
        contact={{
          name: 'Mr. Whiskerson',
          imgUrl: 'http://placekitten.com/300/200',
          phone: '(212) 555-1234',
          email: 'mr.whiskaz@catnap.meow'
        }}
      />

      <ContactCard
        contact={{
          name: 'Fluffykins',
          imgUrl: 'http://placekitten.com/400/200',
          phone: '(212) 555-2345',
          email: 'fluff@me.com'
        }}
      />

      <ContactCard
        contact={{
          name: 'Destroyer',
          imgUrl: 'http://placekitten.com/400/300',
          phone: '(212) 555-3456',
          email: 'ofworlds@yahoo.com'
        }}
      />

      <ContactCard
        contact={{
          name: 'Felix',
          imgUrl: 'http://placekitten.com/200/100',
          phone: '(212) 555-4567',
          email: 'thecat@hotmail.com'
        }}
      />
    </div>
  );
}

export function Todo() {
  const todoItmeComponents = todosData.map(item => <TodoItem key={item.id} item={item}/>);
 
  return (
    <div className="todo-list">
      {todoItmeComponents}
    </div>
  );
}


export function Fun() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />);
  
  return (
    <div>
      {jokeComponents}            
    </div>
  );
}

export function Product() {
  const productComponents = productsData.map(item => <Product key={item.id} product={item}/>);
  
  return (
    <div>
      {productComponents}
    </div>
  );

}

function handleClick() {
  console.log('I was clicked');
}

export function EventHandle() {
  return (
    <div>
      <img alt="face" onMouseOver={() => console.log('Hovered!')} src="https://www.fillmurray.com/200/100"/>
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
