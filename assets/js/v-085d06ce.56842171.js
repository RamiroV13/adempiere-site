"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[84996],{24392:(n,s,e)=>{e.r(s),e.d(s,{default:()=>g});var a=e(78e3);const t=(0,a._)("h2",{id:"书写模式",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#书写模式","aria-hidden":"true"},"#"),(0,a.Uk)(" 书写模式")],-1),i=(0,a._)("p",null,[(0,a.Uk)("CSS 中的书写模式是指文本的排列方向是横向还是纵向的。"),(0,a._)("code",null,"writing-mode"),(0,a.Uk)(" 属性使我们从一种模式切换到另一种模式。为此，您不必使用一种竖向的语言——您还可以更改部分文字的方向以实现创新性的布局。")],-1),o=(0,a._)("p",null,[(0,a.Uk)("可以使用 "),(0,a._)("code",null,"writing-mode: vertical-rl"),(0,a.Uk)(" 对一个标题的显示进行设置，将标题文本变为竖向。")],-1),l=(0,a._)("p",null,"竖向文本在平面设计中很常见，也可以为您的网页设计增添更加有趣的外观。",-1),c=(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("h1")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("Play with writing modes"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("h1")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"})])],-1),p=(0,a._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,a._)("pre",{class:"language-css"},[(0,a._)("code",null,[(0,a._)("span",{class:"token selector"},"h1"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"writing-mode"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" vertical-rl"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"})])],-1),r=(0,a.uE)('<p><code>writing-mode</code> 的三个值分别是:</p><ul><li><code>horizontal-tb</code>: 块流向从上至下。对应的文本方向是横向的。</li><li><code>vertical-rl</code>: 块流向从右向左。对应的文本方向是纵向的。</li><li><code>vertical-lr</code>: 块流向从左向右。对应的文本方向是纵向的。</li></ul><p>因此，<code>writing-mode</code> 属性实际上设定的是页面上块级元素的显示方向——要么是从上到下，要么是从右到左，要么是从左到右。而这决定了文本的方向。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>没有从下到上的方向。</p></div><h2 id="书写模式、块级布局和内联布局" tabindex="-1"><a class="header-anchor" href="#书写模式、块级布局和内联布局" aria-hidden="true">#</a> 书写模式、块级布局和内联布局</h2><p>我们已经讨论了块级布局和内联布局(block and inline layout)，也知道外部显示类型元素分为块级元素和内联元素。如上所述，块级显示和内联显示与文本的书写模式(而非屏幕的物理显示)密切相关。如果您使用书写模式的显示是横向的，如英文，那么块在页面上的显示就是从上到下的。</p><p>当我们切换书写模式时，我们也在改变块和内联文本的方向。<code>horizontal-tb</code> 书写模式下块的方向是从上到下的横向的，而 <code>vertical-rl</code> 书写模式下块的方向是从右到左的纵向的。因此，块维度指的总是块在页面书写模式下的显示方向。而内联维度指的总是文本方向。</p><p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnoAAAFhCAMAAADQjff7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABBVBMVEX/////29vb29vb2////9vb///btraQOgAAAAAAOpAAADqQ2/+2ZgA6Zrb//7ZmAAAAZrYAAGa2////25A6AADbkDo6kNuQZjo6Ojo6Omb/tmYAOmaQtra2tra2kDrbtpCQttvb27ZmtttmOjrbkGZmZmZmkNtmtv//tpAAOjpmZpC2tpA6OgC2Zjo6ZpC2kGY6kLZmOgA6Zjq22/8AZmbb/7bbtma2/7a2ttv/27Y6ZmaQZmaQkGbfwH4yAABmkLagoKAgICDv7++AgIBgYGDf39+fn58QEBC/v79AQEDPz89wcHBQUFCvr6+QkJAwMDCPj49/f3/l5eXExMS2kLa2/9s6OpAgkRLqAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAASdAAAEnQB3mYfeAAAAAd0SU1FB+QLHgcmLHJeG8sAAAs0SURBVHja7d17WxNXAsDhGIgMEQElQQzgjSJVW1u2rRXtrguIQK297O37f5SdS66TmYg+mUlM3t8fJUDKY8jLzDlnZpJKRZIkSZIkSZIkSZIkSZIkSZqNrlUXPnaX7h0Wa8PfvL7gd6jPaXEpWK595B71G+2bK/Wb6fuurgXrNb9GFUEvxHXrdnxrozF832YQbGb+3Dtb2d294ZeuHHqhsL7WK63oP/FGL6jfGP7f2y6Hv5FdHT1dlV5ILt6ytTI2cK2cjV70c7d3doe6h55G7HCr9xv1B9Vq9eFa8Khai3e54X1691zd6+4+o81Y5i41Z0feQm+++2q/VyOo9332uL3di4GE5A7iz79+HI/qOmrCr4+qjp7yWsllsz5E76ue0SfRh6fh9u96e/f5LHSbsVetoad8ev27zM7Nb7LopZn2zyryprftaUbG/LaB3rzT626RonW5Svr2Rnesd1D5tqOyPaa7e3to2SWclxyY4Wo89DpQDnrf2szaeB5U8umZ4WoUvZDN5mfSawXtH5NDL2usdy0ZCQq9yM9B1g53YIabSS/8UnsL9gn0hF6tO1Po7QE/jd5Kd46RN9bLOZT2HEn0EiGbV6A3rKuVM404+Mg0I+iNLTXP9GJAnU+y6D1MpgffNYLv+5ftUkfbMullTTN2nx2ih14CpP63INj+IXdxZSV7dSQ5oPE87fJeP73MsV7/jFpzTK8Z7f6ancW2rBluNr1od/rj2vBYr9VPL5MYeui15UVrwpG9R6MXV5rBwEYsBLn800h6yc/a2EvPL9BDL/GUSHkRxJONEdOMlYHDEDHZ1Y/R20yPCJdrOWvTmi968Rx0szfb2BxBL77vet/kNvz+aHrJUnV70Bh3Dz3F9F5EG6RH/UslN/PphZD2+zZ7K9HXR9NLbrV/UHtTiZ5CendSR/JDKts/Z9BbvJ7smm/93DdIW3xZ+Ri9ZKl6mF7/gTvNJb1wkjB4VOFFPHrrp1d91mjPNOJvNFNH/kfSa1+zgZ6Gd7hHL/MXPr5uBFv9k9yV9thu4AqgkfTCL60nH151TjU97NA78ARYXMmm1+yblG4u9BxFV6bVrkivmdwYnuH2n64g9AbpxQfXnjzdWWhPM7qnqKwM2Bukd/T66c7uL52TkDvXSP79H/U3vYNoLyvOkEdvFL3V1zsLnc+jgd5hZw0mOnrW+x8H6XUuFUq+37l0d2MvfcX3Ss51u5preq3UWSUxvaPD3lej/Wf7eG+aXvtMleS7vVP5unPi9sf7DafxoTdoLHgSXX8xOA6L6EXLf707x2O3zvGKva3H6bFejuFk/BhfFWSoh97ANmkp6N9d9tF7tDQ4twiV3Rz6ccOz1mZ6QNc7u++mXz96fX2VXGz2oJYe+4VjuMFluKOntSvQW0yv3By93o/OJHj1ZvpfEu2ffExB16pXu1+1OkMPOjieL3wnp6BPC70geHs2Pw/33XngOZ8eevOD7+IyfLCe82miNx973ZO38WOdvcd1ltevF3m9y+00r/dv8/rtMq/j3PoO+80+vtPzoEMv97k6y32uPuQ+V7/nPlm5z9Xb3Ofqj9zn6jyY1Y4vZnxfezyzT915Ltc/conn/1Xk/iH9mfvH9yH3Dzb/b7y7wz3/a+bnFwOb+Nxyn6vfcp+r97lPVv5eLfe5+jX3uTqZ0WnGSWX26+Azvp8eepcX8/FQz96iN1X0zt/Nz4ON8XnOp6S/Tubq4YZ7Xc+5JoTPr0CSJEmSJEmSJEnqK9CUhp7QQw+9L7t3F+ihN5GOj9FDbxL9HgSnQ/T+palqJumdHQfB+Ql66JVefA3Qe/TQK32jlwwjLtBDr+QuE3qX6KFX8sJKZ/b0AT30yl1Y6b7GxQl66JXYaW/R6BQ99Mo/claxroceekJP6KGneaX37y879NBDDz300EMPPfTQQw899NBDDz300EMPPfTQQw899NBDDz300EMPPfTQQw899NBDDz300EMPPfTQQw+9idITeuihh57QQw899IQeeuihJ/TQQw89oYceemPvWrXW+2SxujDPB9Jm4Tjel0NvcSnY7H3WDG7dRg899NBDDz300EMPPfTQGwu9jf2ow6D+Kr6x/6aGHnql0Gul3kd6GT30CqxarT5cCr4PPyy0tqLCf/WT6GMDPfSKbKOR3sittMd6TfTQK5tecgM99Eqe4aKHHnrooYceesXTCz9Zr6CHHnrozQ291TX00CuXXvpYRlz9BnrooYferO5wq3Hfhv/qzWo3O1z0ShrrhUO9nPMGrkpPLgv6RHqL/6klZ6/sN4ID9NArid7zO414XBdu9G79d2nUyaLooTe2Hv7S6E4pmuFAL9ryraOHXsHd/6Y9l331oBbvbqNx3krQf2QNPfSKKF5SefJmoXsG1UF7rvEIPfQKbXXt7oNa37l7ydau1cjd7qGH3th70eiN8aKN4fYP6KFXxjQ3Wkte7y7ovYj+9Tdr6KFX+InyhylqyZnzj9FDr/ClvfTo7mgp87CGA2nTf0zty9rqra5tD50p8OJ/n7PDZQa9T+ta7Wr3Qw+9CYUeeuihhx566KGHHnpCDz300BN66KGHntBDDz30hB566KGHHnrooYceeuihhx566HkDerksCD300BN66KGHntCrVK4voIfeJIreMqOGHnrl1xzxio7ooVdciyNfQxk99AqrdZWNHnrojWt8t7fVKXol761Ud71b0EQPic00vbVgVN6oCr3CBnjXd5OeNYL6zu5QNfTQm4bpLXroFbHjjae3GyPfpQo99MbeSvKOGeihV/7CSvK6yeihV/butj2XRQ+9sne37TkGeuiVvLvN7AA99AoteXcW9NCbzAGN58kS8neN4Pvk1j300Cv8hJXgx7XhsV4LPfQKn2Is/4QeepM4gHbr9ip66E1gclu/UUEPvUnsbw8q6KE3iVnGywp66E1yfQU99NBDD73PoieXBX02vaPXT3d2f2lkXJiBHnqF0utcKrRcQw+9UulFh9bCtn+ooIde0fT2th6P63w9ofe5J1Chhx56miN6lWq1gh560xh66KEn9AYe95wdtEIPPfTQQw899NBDDz300EMPPfTQQw899NBDDz300EMPPfTQQw899NBDDz300EMPPfTQQw899NBDDz300BsrPaGHHnpT3uKdrezuepEz9Iqlt5TzPlVeXw+9wult7+wOdQ899Iqnl/Uiji300ENP6KGH3pinGRnzWy/jjZ4Zrsxw0UOvhLHetd1db16A3iToOZCG3oSmGVHPa+ihN4FpRhCs2+qhV/40Y/fZIXroTWSst7qGHnpF01uvoIde+SXENvbS8wv00Cue3mb8DlV9Ldf63y4SPfQKKUQX06s/qLa7hx56ZZS803xIr3vcrIkeemXUjA/WDtNLtobooVfgBPfWbfTQm8hQbz358Gq/3WGH3gF66BW5v42FDc9wkzEgeugVu7+NdrhvegfRXuaeIY8eeuOb38YLxxt76Su+VxKT6KFX1Hpyatu22P54v5F5aBc99Ma70RsY+wXxVUGZQz300BvbLCM9oGt15xo3naWMXpHTjJepLxy93o/OJHj1ZsEJ8uhNU+ihh57Q82Sjh57QE3rooYee0EMPPfSE3sc77Z3P9xd66JXYyXFH3rGtHnql9qFD7x166JXbZSLv0lgPvZK7SOidoYde2b2PHtRbM1z0yp9pnIdzjDP00JvIAsufQ+t6msJmb0n5+LiCHnoTmWm8Qw+96TiuJvTQ0zzRkyRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRp3P0fvxwWWDIdyXwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMTEtMzBUMDc6Mzc6MzMrMDA6MDBUqeA2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTExLTMwVDA3OjM3OjMzKzAwOjAwJfRYigAAAABJRU5ErkJggg==" alt="这张图展示了在水平书写模式下的两种维度"></p><p><img src="data:image/png;base64,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" alt="这张图片展示了纵向书写模式下的两种维度"></p><h3 id="方向" tabindex="-1"><a class="header-anchor" href="#方向" aria-hidden="true">#</a> 方向</h3><p>除了书写模式，我们还可以设置文本方向。正如上面所言，有些语言(如阿拉伯语)是横向书写的，但是是从右向左。</p><p>由于书写模式和文本方向都是可变的，新的 CSS 布局方法不再定义从左到右和从上到下，而是将这些连同内联元素和块级元素的开头和结尾一起考量。</p><h2 id="逻辑属性和逻辑值" tabindex="-1"><a class="header-anchor" href="#逻辑属性和逻辑值" aria-hidden="true">#</a> 逻辑属性和逻辑值</h2><p>正常情况下，您可以设置 width 和 height，但是它们并不会跟随书写模式的改编而进行调整。</p><p>CSS 的映射属性用逻辑(logical)和相对变化(flow relative)代替了像宽 width 和高 height 一样的物理属性。</p><p>横向书写模式下，映射到 width 的属性被称作内联尺寸(inline-size)——内联维度的尺寸。而映射 height 的属性被称为块级尺寸(block-size)，这是块级维度的尺寸。下面的例子展示了替换掉 width 的 inline-size 是如何生效的。</p>',16),d=(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"class"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("wrapper"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"class"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("box horizontal"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("h2")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("Heading"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("h2")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("A paragraph. Demonstrating Writing Modes in CSS."),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("These boxes have inline-size."),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"class"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("box vertical"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("h2")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("Heading"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("h2")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("A paragraph. Demonstrating Writing Modes in CSS."),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("These boxes have inline-size."),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("p")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"})])],-1),u=(0,a._)("div",{class:"language-css ext-css line-numbers-mode"},[(0,a._)("pre",{class:"language-css"},[(0,a._)("code",null,[(0,a._)("span",{class:"token selector"},".wrapper"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"display"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" flex"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token selector"},".box"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"inline-size"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" 150px"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token selector"},".horizontal"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"writing-mode"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" horizontal-tb"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token selector"},".vertical"),(0,a.Uk)(),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token property"},"writing-mode"),(0,a._)("span",{class:"token punctuation"},":"),(0,a.Uk)(" vertical-rl"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token punctuation"},"}"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers","aria-hidden":"true"},[(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"}),(0,a._)("div",{class:"line-number"})])],-1),k=(0,a.uE)('<h3 id="逻辑外边距、边框和内边距属性" tabindex="-1"><a class="header-anchor" href="#逻辑外边距、边框和内边距属性" aria-hidden="true">#</a> 逻辑外边距、边框和内边距属性</h3><p>外边距、边框和内边距属性中，物理属性，例如 <code>margin-top</code>、<code>padding-left</code> 和 <code>border-bottom</code>。同样像 <code>width</code> 和 <code>height</code> 一样不会随着书写模式进行变化，当然这些属性也有相应的映射。</p><p><code>margin-top</code> 属性的映射是 <code>margin-block-start</code> : 总是指向块级维度开始处的边距。</p><p><code>padding-left</code> 属性映射到 <code>padding-inline-start</code>: 这是应用到内联开始方向(这是该书写模式文本开始的地方)上的内边距。</p><p><code>border-bottom</code> 属性映射到的是 <code>border-block-end</code>: 也就是块级维度结尾处的边框。</p><p>其他的 9 个属性应该很很容易写出，不做赘述。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请注意，在这种状态下，您就不能再用 <code>margin</code> <code>padding</code> <code>border</code> 这三个简写属性了。</p></div><h3 id="逻辑值" tabindex="-1"><a class="header-anchor" href="#逻辑值" aria-hidden="true">#</a> 逻辑值</h3><p>物理值(如 <code>top</code>、<code>right</code>、<code>bottom</code> 和 <code>left</code> )。这些值同样拥有逻辑值映射(<code>block-start</code>、<code>inline-end</code>、<code>block-end</code> 和 <code>inline-start</code> )。</p><h3 id="是否使用逻辑属性" tabindex="-1"><a class="header-anchor" href="#是否使用逻辑属性" aria-hidden="true">#</a> 是否使用逻辑属性</h3><p>如果您并没有应用多种书写模式，那么现在您可能更倾向于使用物理属性，因为这些在您使用弹性布局和网格布局时非常有用。</p>',11),A={},g=(0,e(13860).Z)(A,[["render",function(n,s){const e=(0,a.up)("CodeDemo");return(0,a.wg)(),(0,a.iD)("div",null,[t,i,o,l,(0,a.Wm)(e,{id:"code-demo-4c09bf94",type:"normal",title:"%E7%AB%96%E5%90%91%E6%A0%87%E9%A2%98%E6%96%87%E6%9C%AC",code:"%7B%22html%22%3A%22%3Ch1%3EPlay%20with%20writing%20modes%3C%2Fh1%3E%5Cn%22%2C%22css%22%3A%22h1%20%7B%5Cn%20%20writing-mode%3A%20vertical-rl%3B%5Cn%7D%5Cn%22%7D"},{default:(0,a.w5)((()=>[c,p])),_:1}),r,(0,a.Wm)(e,{id:"code-demo-c70f44a4",type:"normal",title:"%E6%98%A0%E5%B0%84%E5%B1%9E%E6%80%A7",code:"%7B%22html%22%3A%22%3Cdiv%20class%3D%5C%22wrapper%5C%22%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%20horizontal%5C%22%3E%5Cn%20%20%20%20%3Ch2%3EHeading%3C%2Fh2%3E%5Cn%20%20%20%20%3Cp%3EA%20paragraph.%20Demonstrating%20Writing%20Modes%20in%20CSS.%3C%2Fp%3E%5Cn%20%20%20%20%3Cp%3EThese%20boxes%20have%20inline-size.%3C%2Fp%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%20%20%3Cdiv%20class%3D%5C%22box%20vertical%5C%22%3E%5Cn%20%20%20%20%3Ch2%3EHeading%3C%2Fh2%3E%5Cn%20%20%20%20%3Cp%3EA%20paragraph.%20Demonstrating%20Writing%20Modes%20in%20CSS.%3C%2Fp%3E%5Cn%20%20%20%20%3Cp%3EThese%20boxes%20have%20inline-size.%3C%2Fp%3E%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Fdiv%3E%5Cn%22%2C%22css%22%3A%22.wrapper%20%7B%5Cn%20%20display%3A%20flex%3B%5Cn%7D%5Cn%5Cn.box%20%7B%5Cn%20%20inline-size%3A%20150px%3B%5Cn%7D%5Cn%5Cn.horizontal%20%7B%5Cn%20%20writing-mode%3A%20horizontal-tb%3B%5Cn%7D%5Cn%5Cn.vertical%20%7B%5Cn%20%20writing-mode%3A%20vertical-rl%3B%5Cn%7D%5Cn%22%7D"},{default:(0,a.w5)((()=>[d,u])),_:1}),k])}]])},13860:(n,s)=>{s.Z=(n,s)=>{const e=n.__vccOpts||n;for(const[n,a]of s)e[n]=a;return e}},1238:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-085d06ce",path:"/code/website/css/intro/text-direction.html",title:"文本方向",lang:"zh-CN",frontmatter:{title:"文本方向",icon:"direction",date:"2019-09-06T00:00:00.000Z",category:["CSS"],summary:"书写模式 CSS 中的书写模式是指文本的排列方向是横向还是纵向的。writing-mode 属性使我们从一种模式切换到另一种模式。为此，您不必使用一种竖向的语言——您还可以更改部分文字的方向以实现创新性的布局。 可以使用 writing-mode: vertical-rl 对一个标题的显示进行设置，将标题文本变为竖向。 竖向文本在平面设计中很常见，也可以为您",head:[["meta",{property:"og:url",content:"https://mrhope.site/code/website/css/intro/text-direction.html"}],["meta",{property:"og:site_name",content:"Mr.Hope"}],["meta",{property:"og:title",content:"文本方向"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://mrhope.site/"}],["meta",{property:"og:updated_time",content:"2022-05-18T14:17:40.000Z"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"文本方向"}],["meta",{property:"article:published_time",content:"2019-09-06T00:00:00.000Z"}],["meta",{property:"article:modified_time",content:"2022-05-18T14:17:40.000Z"}]]},excerpt:"",headers:[{level:2,title:"书写模式",slug:"书写模式",children:[]},{level:2,title:"书写模式、块级布局和内联布局",slug:"书写模式、块级布局和内联布局",children:[{level:3,title:"方向",slug:"方向",children:[]}]},{level:2,title:"逻辑属性和逻辑值",slug:"逻辑属性和逻辑值",children:[{level:3,title:"逻辑外边距、边框和内边距属性",slug:"逻辑外边距、边框和内边距属性",children:[]},{level:3,title:"逻辑值",slug:"逻辑值",children:[]},{level:3,title:"是否使用逻辑属性",slug:"是否使用逻辑属性",children:[]}]}],git:{createdTime:1605516411e3,updatedTime:165288346e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:7},{name:"Mr.Hope",email:"mister-hope@outlook.com",commits:1}]},readingTime:{minutes:4.04,words:1211},filePathRelative:"code/website/css/intro/text-direction.md",localizedDate:"2019年9月6日"}}}]);