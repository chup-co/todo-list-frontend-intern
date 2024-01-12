import {FC} from 'react';

import Card from './components/card';
import Column from './components/column';

const ProjectDetails: FC = () => {
  return (
    <div className="flex gap-3">
      <Column title="11 Dec - " symbol="2000" className="border-b-blue-400">
        <Card
          imageSrc="https://i.pinimg.com/564x/47/c6/05/47c60552285b635e9f9cb31b10e2f9e2.jpg"
          title="Thanh chup"
          description="Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre"
          time="07h30"
        />
      </Column>
      <Column title="Doing" symbol="2" className="border-b-yellow-500">
        <Card
          title="moshi moshi"
          description="Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre"
          time="08h30"
        />
      </Column>
      <Column title="Complete" symbol="2" className="border-b-green-500">
        <Card
          imageSrc="https://i.pinimg.com/564x/49/e8/a8/49e8a877294b37f0a16f5ec79b6cb60d.jpg"
          title="Lorem"
          description="Lorem ipsum dolor sit amet consectet. Sed diam sociis odio neque amet sed gravida amet consecte tre"
          time="17h30"
        />
      </Column>
    </div>
  );
};

export default ProjectDetails;
