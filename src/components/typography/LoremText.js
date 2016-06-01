import React, { Component, PropTypes } from 'react';
const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nulla mollis, mollis
est porta, molestie tortor. Mauris egestas accumsan ipsum, nec tincidunt lorem accumsan ut.
 Sed ac nisl non arcu mollis tempor. Donec faucibus sem nunc, vel ornare augue pretium vitae.
 Aliquam imperdiet et nisl consequat rhoncus. Morbi fringilla velit ut sapien facilisis ullamcorper.
 Pellentesque sodales fermentum enim, eget tincidunt felis mattis eget. Aliquam ullamcorper dui vel nisl
  mattis, a ullamcorper justo bibendum. Donec ultricies justo ac pulvinar molestie. Maecenas fermentum diam leo,
  quis vestibulum augue pellentesque et. Ut nec ornare quam. Sed auctor mauris nulla, quis condimentum lorem dapibus ut. Aliquam sodales egestas laoreet. Nullam blandit enim a tellus tempor vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla ac tincidunt orci. Donec sed diam fermentum, viverra ante vitae, auctor urna. Morbi euismod justo ultrices, rutrum dui efficitur, fermentum neque. Ut quis tortor vulputate, porta nibh nec, convallis libero. Etiam molestie eu ipsum sed venenatis. Nullam vitae arcu gravida, semper quam sit amet, tincidunt mauris. Sed elementum orci quam, et ultrices arcu tempus non. Quisque facilisis felis velit, eu vestibulum tellus venenatis eu. Aliquam in erat neque. Sed quam odio, consequat porttitor vestibulum ut, laoreet sit amet orci. Fusce vitae malesuada dolor. Vestibulum sodales ligula ultricies dolor vehicula elementum. Quisque suscipit, sem a dictum mattis, libero arcu sodales velit, at venenatis turpis velit vel lectus. Proin ac mauris volutpat, bibendum odio non, tristique metus. Fusce fringilla, ex quis sagittis rhoncus, enim metus auctor erat, sed fringilla nisl erat in dui. Praesent porta enim nunc, vel aliquet velit rutrum sed. Donec ac laoreet risus. In quis efficitur arcu. Sed egestas enim leo, vitae rutrum ipsum maximus sit amet. Aenean non nisl nec metus sagittis tincidunt a eu est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis at metus sit amet malesuada. Proin tempor tortor nec lectus imperdiet, et luctus magna consequat. Aliquam laoreet pretium rutrum. Aliquam eget accumsan lacus, vitae varius ex. Donec felis erat, elementum non elementum ac, convallis eget massa. Praesent tempus ex sed ornare molestie. Vivamus volutpat, est et bibendum tristique, nisi massa vehicula libero, ac convallis augue lacus sed sem. Fusce sit amet felis eros. Donec ipsum magna, tincidunt vitae blandit eu, ornare vitae nunc. Etiam eu ipsum tincidunt, gravida risus quis, aliquam orci. Aenean nunc neque, ullamcorper eget arcu tincidunt, tristique tincidunt elit. Quisque viverra iaculis enim, a tincidunt libero placerat sollicitudin. Nam at mi vitae velit egestas sagittis eu a sapien. Praesent rhoncus sem in condimentum imperdiet. Mauris facilisis interdum lacinia. Mauris ante metus, rutrum non pretium sed, aliquam in dui. Praesent euismod, elit sed vestibulum accumsan, leo nunc vulputate sapien, eu egestas sapien purus nec dolor. Nam sed ultrices libero. Cras augue nisl, scelerisque et leo sed, venenatis ultrices lorem. Suspendisse non odio suscipit, vestibulum massa in, facilisis tellus. Quisque vitae neque vitae augue accumsan dapibus condimentum id nunc. In semper aliquet bibendum. Cras vel leo at eros malesuada ullamcorper id nec nisi. Nullam placerat augue orci, ut sodales augue tempus sit amet. Donec auctor vestibulum augue, ut euismod eros sodales id. Donec turpis purus, posuere dignissim lobortis at, consequat maximus lectus. Vestibulum ac ultrices lorem, quis aliquam augue. In vitae sollicitudin dolor. Nam orci leo, tristique quis tincidunt eu, tristique nec ante. Nullam malesuada nec nunc sit amet efficitur. Cras sed sapien vulputate, cursus quam quis, condimentum orci. Sed euismod porta erat. Etiam at dolor sed est ullamcorper tempor. In at risus mollis, lobortis lacus id, dictum leo. Sed porttitor imperdiet ex, a ultrices nibh. Phasellus suscipit nisl ut tincidunt facilisis. Donec neque neque, gravida id dapibus nec, tincidunt eget lectus.`;

export default class LoremText extends Component {

  truncateByChar(str, length) {
    return str.length > length ? str.substring(0, length /* - 3 */) + '...' : str;
  }

  truncateByWord(str, length) {
    const inputWords = str.split(/\s+/);
    let newStr;
    if (inputWords.length > length) {
      newStr = inputWords.slice(0, length).join(' ') + '…';
    }
    return newStr;
  }

  render() {
    let printText;
    if (this.props.words) {
      // WORDS
      printText = this.truncateByWord(text, this.props.words);
    } else {
      // CHARS and DEFAULT
      printText = this.truncateByChar(text, this.props.chars);
    }

    return (
        <div>
         {printText}
        </div>
      );
  }
}

// PropTypes validation
LoremText.propTypes = {
  words: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  chars: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

// default props
LoremText.defaultProps = {
  chars: 5,
};
