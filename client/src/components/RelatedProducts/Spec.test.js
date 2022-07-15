/**
 * @jest-environment jsdom
 */
// import dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// import react-testing methods and add custom jest matchers from jest-dom
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

// the components to test
import RelatedProducts from './index.jsx';
import ProductList from './components/ProductList.jsx';
import ProductItem from './components/ProductItem.jsx';
import OutfitList from './components/OutfitItem.jsx';
import AddOutfit from './components/AddOutfit.jsx';
import Comparing from './components/Comparing.jsx';


describe("render RelatedProducts and subComponents correctly", () => {
  it("render RelatedProducts component correctly", async () => {
    render (<RelatedProducts curProductID={71702} />);
    const title = await waitFor(() => screen.findByText(/RELATED PRODUCT/));
    expect (title).toBeInTheDocument();
  });
  // it("render OutfitList component correctly", async () => {
  //   render (<OutfitList curProductID={71702} />);
  //   const title = await waitFor(() => screen.findByText(/YOUR OUTFIT/));
  //   expect (title).toBeInTheDocument();
  // });
});


// describe("render RelatedProducts and its SubComponent correctly", () => {
//   it('changes the class when hovered', () => {
//     const testRenderer = TestRenderer.create(<RelatedProducts />);
//     const testInstance = testRenderer.root;
//     expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
//     expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
//   });
// });

