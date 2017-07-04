import expect from 'expect';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import CourseForm from './CourseForm';

function setup(saving) {
  let props = {
    course: {},
    allAuthors: [],
    saving: saving,
    onSave: () => {},
    onChange: () => {},
    errors: {}
  };

  let renderer = new ReactShallowRenderer();
  renderer.render(<CourseForm {...props}/>);
  let output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe('CourseForm via React Test Utils', () => {
  it('renders form and h1', () => {
    const { output } = setup(false);
    expect(output.type).toBe('form');
    let [ h1 ] = output.props.children;
    expect(h1.type).toBe('h1');
  });

  it('save button is labeled "Save" when not saving', () => {
    const { output } = setup(false);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const { output } = setup(true);
    const submitButton = output.props.children[5];
    expect(submitButton.props.value).toBe('Saving...');
  });
});
