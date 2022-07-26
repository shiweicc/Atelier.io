import React from 'react';
import $ from 'jquery';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.clickedLeft = this.clickedLeft.bind(this);
    this.clickedRight = this.clickedRight.bind(this);
    this.clickedImage = this.clickedImage.bind(this);
  }

  clickedLeft() {
    let prevImage = this.props.image;
    let currImage = (this.props.sources.length + prevImage - 1) % this.props.sources.length;
    let start = this.props.start;
    let end = this.props.end;
    if (currImage < start) {
      start --;
      end --;
    }
    this.props.update(currImage, start, end);
  }

  clickedRight() {
    let prevImage = this.props.image;
    let currImage = (this.props.sources.length + prevImage + 1) % this.props.sources.length;
    let start = this.props.start;
    let end = this.props.end;
    if (currImage > end) {
      start ++;
      end ++;
    }
    this.props.update(currImage, start, end);
  }

  clickedImage(e) {
    let element = document.getElementById('POleft');
    let ele = e.target;
    let $thumbnail = $('.POthumbnail')[0];
    let $arrows = $('.POcarousel-button');
    if (this.props.zoomed) {
      requestAnimationFrame(() => {
        element.style.transition = `
          width 350ms ease-in-out
        `;
        element.style.width = '450px';
        ele.style.transition = `
          width 350ms ease-in-out
        `;
        ele.style.width = '450px';
      })
      let $image = $('#POcarousel-img-main');
      $image.removeClass('POcarousel-zoomed');
      this.props.updateView('expand', 'zoom');
    } else if (this.props.expanded) {
      let $carousel = $('#POimg-carousel');
      let $lens = $(`<div id="POlens"></div>`);
      let $zoomed = $('<div id="POzoomed"></div>');
      let $poRight = $('#POright');
      $carousel.append($lens);
      $poRight.append($zoomed);
      $thumbnail.style.visibility = 'hidden';
      $arrows.each((index) => {
        $arrows[index].style.visibility = 'hidden';
      })
      var xmultiplier = $zoomed.width() / $lens.width();
      var ymultiplier = $zoomed.height() / $lens.height();
      let $image = $('#POcarousel-img-main');
      $zoomed.css('background-image', `url(${$image.attr('src')})`);
      $zoomed.css('background-size', `${xmultiplier * $image.width()}px ${ymultiplier * $image.height()}px`)
      $zoomed.css('background-repeat', 'no-repeat');
      $lens.on('click', () => {
        let $imglens = $('#POlens');
        let $result = $('#POzoomed');
        $imglens.remove();
        $result.remove();
        $thumbnail.style.visibility = 'visible';
        $arrows.each((index) => {
          $arrows[index].style.visibility = 'visible';
        })
      })
      $image.mousemove((e) => {
        e.preventDefault();
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let x = mouseX - $image.offset().left - $lens.width() / 2;
        let y = mouseY - $image.offset().top - $lens.height() / 2;
        if (x < 0) {
          x = 0;
        }
        if (x > $image.width() - $lens.width() - 2) {
          x = $image.width() - $lens.width() - 2;
        }
        if (y < 0) {
          y = 0;
        }
        if (y > $image.height() - $lens.height() - 2) {
          y = $image.height() - $lens.height() - 2;
        }
        $lens.css('left', x);
        $lens.css('top', y);
        $zoomed.css('background-position', `-${x * xmultiplier}px -${y * ymultiplier}px`);
      })
      this.props.updateView('zoom');
    } else {
      requestAnimationFrame(() => {
        element.style.transition = `
          width 350ms ease-in-out
        `;
        element.style.width = '810px';
        ele.style.transition = `
        width 350ms ease-in-out
      `;
      ele.style.width = '810px';
      })
      let $image = $('#POcarousel-img-main');
      $image.addClass('POcarousel-zoomed');
      this.props.updateView('expand');
    }
  }

  componentDidMount () {

  }

  render () {
    let current = this.props.image;
    return (
      <div class='POcarousel' id='POimg-carousel'>
        {
          current !== 0 && <button id='POcarousel-left' class='POcarousel-button' aria-label='previous-slide' onClick={this.clickedLeft}>{'<'}</button>
        }
        {
          <img class='POcarousel-img' id='POcarousel-img-main' index={this.props.image} src={this.props.sources[this.props.image].url} onClick={this.clickedImage}></img>
        }
        {
          current !== this.props.sources.length - 1 && <button id='POcarousel-right' class='POcarousel-button' aria-label='next-slide' onClick={this.clickedRight}>{'>'}</button>
        }
      </div>
    )
  }
}

export default Carousel;