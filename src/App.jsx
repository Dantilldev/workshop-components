import React from 'react';
import './App.css';
import Button from './componentes/Button';
import AlertComponent from './componentes/Alert';
import {BadgeObj} from './componentes/Badge';
import ModalComponent from './componentes/Modal';

import CardComponent from './componentes/Card';
// import {cards} from './componentes/Cards';

export default function App() {
  return (
    <>
      {/* Button Componentes */}
      <div>
        <h1 className="title">Buttons:</h1>

        <div className="flex gap-10 justify-center mt-5 ">
          <Button color="red" size="small" disable={true}>
            Disable Button
          </Button>
          <Button color="blue" size="medium" disable={false}>
            Button 1
          </Button>
          <Button color="green" size="large" disable={false}>
            Button 2
          </Button>
        </div>
      </div>

      {/* Alert Componentes */}
      <div>
        <h1 className="title">Alerts:</h1>

        <div className="flex flex-col  gap-2 mt-5  ">
          <AlertComponent
            icon="error"
            color="error"
            message="This is an error alert!"
          />

          <AlertComponent
            icon="success"
            color="success"
            message="This is an success alert!"
          />
          <AlertComponent
            icon="info"
            color="info"
            message="This is an info alert!"
          />
        </div>
      </div>

      {/* Badges Components */}
      <div>
        <h1 className="title">Badges:</h1>

        <div className=" flex items-center flex-col  gap-10 mt-5 ">
          <BadgeObj
            color="failure"
            message=" Failure"
            size="small"
            icon="failure"
          />
          <BadgeObj
            color="warning"
            message=" Warning"
            size="medium"
            icon="warning"
          />
          <BadgeObj
            color="success"
            message="Success"
            size="large"
            icon="success"
          />
        </div>
      </div>

      {/* Cards Components */}
      <h1 className="title">Cards:</h1>

      <div className="flex flex-col md:flex-row items-end justify-center gap-4 p-4">
        <CardComponent
          size="small"
          image="img1"
          alt="Frezzing dog"
          target="_blank"
          href="img1"
          title="Frezzing dogs"
          infoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus quod debitis laborum"
        />
        <CardComponent
          size="medium"
          image="img2"
          href="img2"
          alt="Dog with glasses"
          target="_blank"
          title="Dog with glasses"
          infoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus."
        />
        <CardComponent
          size="large"
          image="img3"
          href="img3"
          alt="A giraffe"
          title="Wildlife "
          infoText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus quod debitis laborum perspiciatis sunt dolores unde ea illum necessitatibus?"
        />
      </div>
      <h1 className="title">Modal:</h1>
      <br />
      <div className=" flex items-center flex-col  gap-10 mt-5 ">
        <ModalComponent />
      </div>
    </>
  );
}
