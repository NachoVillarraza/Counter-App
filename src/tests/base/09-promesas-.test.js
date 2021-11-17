import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../datos/heroes';

describe('Pruebas con Promesas', () => {
  test('Debe retornar un heroe async', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('Debe retornar un erroe si el id del heroe no existe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
