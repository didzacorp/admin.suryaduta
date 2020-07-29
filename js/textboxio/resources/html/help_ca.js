/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(a){return function(){return a}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("help_ca.js","help for language ca")({version:"2.3.0",about:a('\ufeff<div role=presentation class="ephox-polish-help-article ephox-polish-help-about">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Quant a</div>\n  <p>Textbox.io \xe9s una eina WYSIWYG que serveix per crear contingut atractiu a les aplicacions en l\xednia. Tant a les comunitats socials com als blogs, als correus o en qualsevol situaci\xf3 interm\xe8dia, Textbox.io permet que la gent s\'expressi a Internet.</p>\n  <p>&nbsp;</p>\n  <p>Textbox.io @@FULL_VERSION@@</p>\n  <p>Muntatge del client @@CLIENT_VERSION@@</p>\n  <p class="ephox-polish-help-integration">Integraci\xf3 per a @@INTEGRATION_TYPE@@, versi\xf3 @@INTEGRATION_VERSION@@</p>\n  <p>&nbsp;</p>\n  <p>Copyright 2017 Ephox Corporation. Tots els drets reservats.</p>\n  <p><a href="javascript:void(0)" class="ephox-license-link">Llic\xe8ncies de tercers</a></p>\n</div>'),accessibility:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Navegaci\xf3 amb el teclat</div>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Activaci\xf3 de la navegaci\xf3 amb el teclat</div>\n  <p>Per habilitar la navegaci\xf3 amb el teclat a la barra d\'eines, premeu F10 amb Windows o ALT + F10 amb Mac OSX. El primer element de la barra d\'eines es marcar\xe0 amb un contorn blau per indicar que est\xe0 seleccionat. </p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Moure\'s entre grups</div>\n  <p>Els botons de la barra d\'eines estan separats per grups d\'accions similars. Quan la navegaci\xf3 amb el teclat est\xe0 activada, la tecla de tabulaci\xf3 mour\xe0 la selecci\xf3 al grup seg\xfcent, mentre que maj + tab far\xe0 que la selecci\xf3 retorni al grup anterior. Si es prem la tecla de tabulaci\xf3 a l\'\xfaltim grup, es retornar\xe0 al primer grup de botons.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Moure\'s entre elements o botons</div>\n  <p>Per moure-us als elements anteriors o seg\xfcents, utilitzeu les fletxes. Els elements canviaran dins del seu grup, feu servir la tecla de tabulaci\xf3 per saltar al seg\xfcent grup i les fletxes per moure-us dins del grup.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Executar ordres</div>\n  <p>Per executar una ordre, desplaceu la selecci\xf3 al bot\xf3 desitjat i premeu espai o retorn.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Obrir, canviar i tancar men\xfas</div>\n  <p>Quan un element de la barra d\'eines cont\xe9 un men\xfa, les tecles espai o retorn obriran el men\xfa. Quan s\'obre el men\xfa, se seleccione el primer element, utilitzeu les fletxes per despla\xe7ar-vos dins del men\xfa. Per despla\xe7ar-vos cap amunt o cap avall dins del men\xfa, premeu la fletxa cap amunt o cap avall, respectivament. Aix\xf2 tamb\xe9 s\'aplica als submen\xfas.</p>\n\n  <p>Els elements del men\xfa que tenen submen\xfas es marquen amb cometes angulars. Si premeu la fletxa en el sentit de les cometes angulars, s\'obrir\xe0 el submen\xfa, mentre que la fletxa cap al sentit oposat tancar\xe0 el submen\xfa.</p>\n\n  <p>Per tancar qualsevol men\xfa actiu, utilitzeu la tecla escape. Quan es tanca un men\xfa, es restableix la selecci\xf3 a la selecci\xf3 anterior.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Editar o suprimir enlla\xe7os</div>\n\n  <p>Per editar o suprimir un enlla\xe7, desplaceu-vos al men\xfa "Inserir" i seleccioneu "Inserir un enlla\xe7". L\'editor mostra el di\xe0leg d\'edici\xf3 d\'enlla\xe7os. </p>\n\n  <p>Editeu l\'enlla\xe7 introduint la nova URL en el quadre d\'entrada d\'actualitzaci\xf3 d\'enlla\xe7os i prement la tecla de retorn. Suprimiu l\'enlla\xe7 del document amb el bot\xf3 suprimir.  Per sortir del di\xe0leg sense realitzar cap canvi, premeu Esc.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Canviar el cos de lletra i la mida de les vores de taula</div>\n\n  <p>Per canviar el cos de lletra, desplaceu-vos a trav\xe9s del men\xfa de tipus de lletra i seleccioneu cos de lletra. L\'editor mostra el di\xe0leg de cos de lletra en el men\xfa i estableix l\'enfocament al di\xe0leg.</p>\n\n  <p>Per canviar la mida de les vores, desplaceu-vos a l\'element de mida de les vores de taula de la barra d\'eines i seleccioneu la mida de les vores de taula. L\'editor mostra el di\xe0leg de cos de lletra en el men\xfa i estableix l\'enfocament al di\xe0leg. Nota: L\'element de vores de taula de la barra d\'eines nom\xe9s est\xe0 disponible quan el cursor \xe9s dins de la taula.</p>\n\n  <p>Dins del di\xe0leg de mida, premeu la tecla de tabulaci\xf3 per moure la selecci\xf3 al control seg\xfcent. Premeu maj+tab per moure la selecci\xf3 al control anterior.</p>\n\n  <p>Per modificar la mida, introdu\xefu el valor nou al quadre d\'entrada de mida. Per exemple, 14 p\xedxels o 1em. Per validar els canvis, premeu retorn. Tingueu present que la tecla retorn tanca el di\xe0leg i retorna l\'enfocament al document. </p>\n\n  <p>Per canviar la mida sense sortir del di\xe0leg, utilitzeu els botons d\'augmentar o de reduir mida. Si es canvia la mida amb els botons d\'augmentar i de reduir, canviar\xe0 immediatament la mida de l\'element mentre es mant\xe9 el valor actual de l\'unitat. Per sortir del di\xe0leg de mida, premeu la tecla Esc.</p>\n\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">Escap\xe7ar una imatge</div>\n\n  <p>Per accedir a la funci\xf3 d\'escap\xe7ament, seleccioneu una imatge per mostrar les operacions d\'imatge a la barra d\'eines. Aquestes operacions tamb\xe9 estan disponibles al men\xfa contextual. Un cop activada la funci\xf3 d\'escap\xe7ament, apareixer\xe0 una m\xe0scara d\'escap\xe7ament sobre la imatge i es seleccionar\xe0 el cant\xf3 superior esquerre. </p>\n\n  <p>Mogueu-vos amb la tecla de tabulaci\xf3. Es poden seleccionar els quatre cantons, aix\xed com tota la finesta de la m\xe0scara d\'escap\xe7ament. Es pot escap\xe7ar cada cant\xf3 individualment o tamb\xe9 es poden moure tots els cantons alhora movent tota la finestra de la m\xe0scara d\'escap\xe7ament.</p>\n\n  <p>Per moure la selecci\xf3 a trav\xe9s de la imatge, es fan servir les fletxes. Cada cop que es premi una fletxa, es mour\xe0 10 p\xedxels, per fer moviments m\xe9s petits, premeu maj al mateix temps que la fletxa per moure 1 p\xedxel.</p>\n\n  <p>Per aplicar l\'escap\xe7ament a la imatge, premeu la tecla retorn.</p>\n\n  <p>Per cancel\xb7lar l\'escap\xe7ament sense que afecti la imatge, premeu la tecla ESC.</p>\n\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n      <caption>Navegaci\xf3 amb el teclat</caption>\n      <thead>\n        <tr>\n          <th scope="col">Acci\xf3</th>\n          <th scope="col">Windows</th>\n          <th scope="col">Mac OS</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Activa la barra d\'eines</td>\n        <td>F10</td>\n        <td>ALT + F10</td>\n      </tr>\n      <tr>\n        <td>Selecciona el bot\xf3 del grup seg\xfcent o anterior</td>\n        <td>\u2190 o \u2192</td>\n        <td>\u2190 o \u2192</td>\n      </tr>\n      <tr>\n        <td>Mou-te al grup seg\xfcent</td>\n        <td>TABULACI\xd3</td>\n        <td>TABULACI\xd3</td>\n      </tr>\n      <tr>\n        <td>Mou-te al grup anterior</td>\n        <td>MAJ + TABULACI\xd3</td>\n        <td>MAJ + TABULACI\xd3</td>\n      </tr>\n      <tr>\n        <td>Executa l\'ordre</td>\n        <td>ESPAI o RETORN</td>\n        <td>ESPAI o RETORN</td>\n      </tr>\n      <tr>\n        <td>Obrir el men\xfa principal</td>\n        <td>ESPAI o RETORN</td>\n        <td>ESPAI o RETORN</td>\n      </tr>\n      <tr>\n        <td>Obrir/expandir el submen\xfa</td>\n        <td>ESPAI o RETORN o \u2192</td>\n        <td>ESPAI o RETORN o \u2192</td>\n      </tr>\n      <tr>\n        <td>Selecciona l\'element de men\xfa seg\xfcent o anterior</td>\n        <td>\u2193 o \u2191</td>\n        <td>\u2193 o \u2191</td>\n      </tr>\n      <tr>\n        <td>Tanca el men\xfa</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n      <tr>\n        <td>Tancar/amagar el submen\xfa</td>\n        <td>ESC o \u2190</td>\n        <td>ESC o \u2190</td>\n      </tr>\n      <tr>\n        <td>Moure la selecci\xf3 d\'escap\xe7ament d\'imatge</td>\n        <td>\u2190 o \u2192 o \u2193 o \u2191</td>\n        <td>\u2190 o \u2192 o \u2193 o \u2191</td>\n      </tr>\n      <tr>\n        <td>Moure la selecci\xf3 d\'escap\xe7ament d\'imatge amb precisi\xf3</td>\n        <td>Premeu MAJ mentre ho mogueu</td>\n        <td>Premeu MAJ mentre ho mogueu</td>\n      </tr>\n      <tr>\n        <td>Aplicar escap\xe7ament</td>\n        <td>RETORN</td>\n        <td>RETORN</td>\n      </tr>\n      <tr>\n        <td>Cancel\xb7lar escap\xe7ament</td>\n        <td>ESC</td>\n        <td>ESC</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n'),a11ycheck:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Comprovaci\xf3 d\'accessibilitat</div>\n  <p>L\'eina de Comprovaci\xf3 d\'accessibilitat (si est\xe0 habilitada) pot identificar els seg\xfcents problemes d\'accessibilitat en documents HTML.</p>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-a11ycheck-table">\n      <caption>Definicions del problema</caption>\n      <thead>\n        <tr>\n          <th scope="col">Problema</th>\n          <th scope="col">WCAG</th>\n          <th scope="col">Descripci\xf3</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td>Les imatges han de tenir una descripci\xf3 de text alternativa</td>\n        <td>1.1.1</td>\n        <td>Les imatges han de tenir un valor de text alternatiu establert, que descrigui la imatge subjecte a usuaris amb problemes de vista </td>\n      </tr>\n      <tr>\n        <td>El text alternatiu no pot ser el mateix que el nom de fitxer de la imatge</td>\n        <td>1.1.1</td>\n        <td>Eviteu fer servir el nom de fitxer en el valor de text alternatiu. Seleccioneu un valor de text alternatiu que descrigui el tema de la imatge.</td>\n      </tr>\n      <tr>\n        <td>Les taules han de tenir llegendes</td>\n        <td>1.3.1</td>\n        <td>Les taules han de tenir un text descriptiu breu que indiqui els continguts de la taula.</td>\n      </tr>\n      <tr>\n        <td>Les taules complexes han de tenir resums</td>\n        <td>1.3.1</td>\n        <td>Les taules amb estructures complexes (cel\xb7les que comprenen diverses files o columnes) han d\'incloure un resum que descrigui l\'estructura de la taula. </td>\n      </tr>\n      <tr>\n        <td>El resum i la llegenda de la taula no poden tenir el mateix valor</td>\n        <td>1.3.1</td>\n        <td>La llegenda de la taula ha de descriure els continguts de la taula, mentre que el resum de la taula ha de descriure l\'estructura de les taules complexes. </td>\n      </tr>\n      <tr>\n        <td>Les taules han de tenir almenys una cel\xb7la de cap\xe7alaera</td>\n        <td>1.3.1</td>\n        <td>Les taules han d\'incloure unes cap\xe7aleres de fila o columna adequades per descriure els continguts de la fila o la columna.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">M\xe9s informaci\xf3 sobre aquest tema (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Les cap\xe7aleres de taula s\'han d\'aplicar a una fila o a una columna.</td>\n        <td>1.3.1</td>\n        <td>Les cap\xe7aleres han d\'estar associades a la fila o a la columna que descriuen.<br/><a href="http://webaim.org/techniques/tables/data#th" target="_blank">M\xe9s informaci\xf3 sobre aquest tema (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Aquest par\xe0graf sembla un t\xedtol. Si \xe9s un t\xedtol, seleccioneu un nivell de t\xedtol.</td>\n        <td>1.3.1</td>\n        <td>Utilitzeu cap\xe7aleres per dividir documents en seccions.  Eviteu fer servir par\xe0grafs formatats en el lloc dels t\xedtols.<br/><a href="http://webaim.org/techniques/semanticstructure/#correctly" target="_blank">M\xe9s informaci\xf3 sobre aquest tema (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Els t\xedtols s\'han d\'aplicar de forma consecutiva. Per exemple: el t\xedtol 1 ha d\'estar seguit pel t\xedtol 2, no pel t\xedtol 3.</td>\n        <td>1.3.1</td>\n        <td>Els t\xedtols dels documents han d\'apar\xe8ixer de forma jer\xe0rquica, en un ordre ascendent o equivalent.<br/><a href="http://webaim.org/techniques/semanticstructure/#contentstructure" target="_blank">M\xe9s informaci\xf3 sobre aquest tema (webaim.org).</a> </td>\n      </tr>\n      <tr>\n        <td>Utilitzeu etiquetatge de llistes per a les llistes</td>\n        <td>1.3.1</td>\n        <td>Assegureu-vos que les llistes d\'elements utilitzen l\'estructura de llistes HTML per representar llistes (<code>&lt;ul&gt;</code> o <code>&lt;ol&gt;</code> i <code>&lt;li&gt;</code>).</td>\n      </tr>\n      <tr>\n        <td>El text ha de tenir una relaci\xf3 de contrast de 4,5:1</td>\n        <td>1.4.3</td>\n        <td>El text i el seu fons han de tenir una relaci\xf3 de contrast que permeti que les persones amb una visi\xf3 moderadament redu\xefda el puguin llegir. </td>\n      </tr>\n      <tr>\n        <td>Els enlla\xe7os adjacents s\'han de combinar.</td>\n        <td>2.4.4</td>\n        <td>Els enlla\xe7os adjacents que condueixin al mateix recurs s\'han de combinar en un \xfanic enlla\xe7.</td>\n      </tr>\n    </tbody>\n  </table>\n  <div role="heading" aria-level="2" class="ephox-polish-help-h2">M\xe9s informaci\xf3</div>\n  <p>\n    <a href="http://webaim.org/intro/" target="_blank">Introducci\xf3 a l\'accessibilitat web (webaim.org)</a> <br/>\n    <a href="http://www.w3.org/WAI/intro/wcag" target="_blank">Introducci\xf3 a WCAG 2,0 (w3.org)</a> <br/>\n    <a href="http://www.section508.gov/" target="_blank">Apartat 508 de la Llei de Rehabilitaci\xf3 dels Estats Units (section508.gov)</a>\n  </p>\n</div>'),markdown:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div class="ephox-polish-help-h1" role="heading" aria-level="1">Format Markdown</div>\n  <p>Markdown \xe9s una sintaxi que serveix per crear estructures HTML i format sense haver d\'utilitzar dreceres de teclat o men\xfas d\'acc\xe9s. Per utilitzar el format markdown, introdu\xefu la sintaxi desitjada i despr\xe9s premeu la tecla retorn o la tecla espai.</p>\n  <table cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-markdown" aria-readonly="true">\n      <caption>Sintaxi de format del teclat</caption>\n      <thead>\n        <tr>\n          <th scope="col">Sintaxi</th>\n          <th scope="col">Resultat en HTML</th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td><pre># L\'encap\xe7alament m\xe9s gran</pre></td>\n        <td><pre>&lt;h1&gt; L\'encap\xe7alament m\xe9s gran&lt;/h1&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>## Encap\xe7alament m\xe9s gran</pre></td>\n        <td><pre>&lt;h2&gt;Encap\xe7alament m\xe9s gran&lt;/h2&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>### Encap\xe7alament gran</pre></td>\n        <td><pre>&lt;h3&gt;Encap\xe7alament gran&lt;/h3&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>####  Encap\xe7alament</pre></td>\n        <td><pre>&lt;h4&gt;Encap\xe7alament&lt;/h4&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>##### Encap\xe7alament petit</pre></td>\n        <td><pre>&lt;h5&gt;Encap\xe7alament petit&lt;/h5&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>###### L\'encap\xe7alament m\xe9s petit</pre></td>\n        <td><pre>&lt;h6&gt;L\'encap\xe7alament m\xe9s petit&lt;/h6&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>* Llista sense ordenar</pre></td>\n        <td><pre>&lt;ul&gt;&lt;li&gt;Llista sense ordenar&lt;/li&gt;&lt;/ul&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>1. Llista ordenada</pre></td>\n        <td><pre>&lt;ol&gt;&lt;li&gt;Llista ordenada&lt;/li&gt;&lt;/ol&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>*Cursiva*</pre></td>\n        <td><pre>&lt;em&gt;Cursiva&lt;/em&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>**Negreta**</pre></td>\n        <td><pre>&lt;strong&gt;Negreta&lt;/strong&gt;</pre></td>\n      </tr>\n      <tr>\n        <td><pre>---</pre></td>\n        <td><pre>&lt;hr/&gt;</pre></td>\n      </tr>\n    </tbody>\n  </table>\n</div>'),shortcuts:a('\ufeff<div role=presentation class="ephox-polish-help-article">\n  <div role="heading" aria-level="1" class="ephox-polish-help-h1">Dreceres de teclat</div>\n  <table aria-readonly="true" cellpadding="0" cellspacing="0" class="ephox-polish-tabular ephox-polish-help-table ephox-polish-help-table-shortcuts">\n    <caption>Ordres de l\'editor</caption>\n    <thead>\n      <tr>\n        <th scope="col">Acci\xf3</th>\n        <th scope="col">Windows</th>\n        <th scope="col">Mac OS</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Desf\xe9s</td>\n        <td>CTRL + Z</td>\n        <td>\u2318Z</td>\n      </tr>\n      <tr>\n        <td>Ref\xe9s</td>\n        <td>CTRL + Y</td>\n        <td>\u2318\u21e7Z</td>\n      </tr>\n      <tr>\n        <td>Negreta</td>\n        <td>CTRL + B</td>\n        <td>\u2318B</td>\n      </tr>\n      <tr>\n        <td>Cursiva</td>\n        <td>CTRL + I</td>\n        <td>\u2318I</td>\n      </tr>\n      <tr>\n        <td>Subratllat</td>\n        <td>CTRL + U</td>\n        <td>\u2318U</td>\n      </tr>\n      <tr>\n        <td>Sagnat</td>\n        <td>CTRL + ]</td>\n        <td>\u2318]</td>\n      </tr>\n      <tr>\n        <td>Redueix el sagnat </td>\n        <td>CTRL + [</td>\n        <td>\u2318[</td>\n      </tr>\n      <tr>\n        <td>Afegeix un enlla\xe7</td>\n        <td>CTRL + K</td>\n        <td>\u2318K</td>\n      </tr>\n      <tr>\n        <td>Cerca</td>\n        <td>CTRL + F</td>\n        <td>\u2318F</td>\n      </tr>\n      <tr>\n        <td>Mode de pantalla sencera (Activa)</td>\n        <td>CTRL + MAJ + F</td>\n        <td>\u2318\u21e7F</td>\n      </tr>\n      <tr>\n        <td>Di\xe0leg d\'ajuda (Obre)</td>\n        <td>CTRL + MAJ + H</td>\n        <td>\u2303\u2325H</td>\n      </tr>\n      <tr>\n        <td>Men\xfa contextual (Obre)</td>\n        <td>MAJ + F10</td>\n        <td>\u21e7F10\u200e\u200f</td>\n      </tr>\n      <tr>\n        <td>Emplenament autom\xe0tic de codi</td>\n        <td>CTRL + Espai</td>\n        <td>\u2303Espai</td>\n      </tr>\n      <tr>\n        <td>Visualitzaci\xf3 de codi accessible</td>\n        <td>CTRL + MAJ + U</td>\n        <td>\u2318\u2325U</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class="ephox-polish-help-note" role="note">*Nota: L\'administrador pot inhabilitar algunes caracter\xedstiques.</div>\n</div>\n')})}();