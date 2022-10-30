import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('Test with only first param', () => {
    expect(classNames('someClass'))
      .toBe('someClass');
  });

  test('Test with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe('someClass class1 class2');
  });

  test('Test with mods', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2']
    ))
      .toBe('someClass hovered scrollable class1 class2');
  });

  test('Test with mods false', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2']
    ))
      .toBe('someClass hovered class1 class2');
  });

  test('Test with mods undefined', () => {
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['class1', 'class2']
    ))
      .toBe('someClass hovered class1 class2');
  });
});
