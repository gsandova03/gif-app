import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });
//con el paquete createSerializer creamos una snapshot con todad las etiquetas de nuestro componente
expect.addSnapshotSerializer( createSerializer({ mode:'deep' }) );
