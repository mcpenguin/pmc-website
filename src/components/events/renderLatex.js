// module to render latex

import katex from 'katex';
import 'katex/dist/katex.min.css';

export default function renderLatex(latex_string) {
    console.log(latex_string);
    var html = katex.renderToString(latex_string, {
        throwOnError: false
    });
    return html;
}