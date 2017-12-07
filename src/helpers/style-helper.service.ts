import {ComponentFillSpecs, MemoLineDefinition} from '../definitions/field.definitions';
import {Injectable, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {FieldPropertiesConstants} from '../definitions/field-properties.constants';

@Injectable()
export class StyleHelperService {
  constructor(private sanitizer: DomSanitizer,
              private documentProperties: FieldPropertiesConstants) {
  }

  private toLengthArray(borderStyle: number, shouldUseSmallDashes?: boolean) {
    switch (borderStyle) {
      case this.documentProperties.id_penstyle_dash:
        return shouldUseSmallDashes ?
          [0, 2, 4, 0] :
          [0, 6, 18, 0];
      case this.documentProperties.id_penstyle_dot:
        return shouldUseSmallDashes ?
          [0, 2, 2, 0] :
          [0, 3, 3, 0];
      case this.documentProperties.id_penstyle_dashdot:
        return [0, 6, 3, 6, 9, 0];
      case this.documentProperties.id_penstyle_dashdotdot:
        return [0, 3, 3, 3, 3, 3, 9, 0];
      default:
        return [1, 0];
    }
  }

  toDashArray(borderStyle: number, shouldUseSmallDashes?: boolean) {
    return this.toLengthArray(borderStyle, shouldUseSmallDashes).join(',');
  }

  toPath(borders: string, componentWidth: number, componentHeight: number, borderWidth: number) {
    const halfBorder = borderWidth / 2,
      rightX = componentWidth - halfBorder,
      bottomY = componentHeight - halfBorder;

    let borderPath = '',
      hasTop: boolean,
      hasRight: boolean,
      hasBottom: boolean;
    if (hasTop = borders.indexOf('t') >= 0)
      borderPath += `M 0 ${halfBorder} L ${componentWidth} ${halfBorder} `;
    if (hasRight = borders.indexOf('r') >= 0)
      borderPath += `${hasTop ? `L ${rightX} ${halfBorder} L` : 'M'} ${rightX} 0 L ${rightX} ${componentHeight} `;
    if (hasBottom = borders.indexOf('b') >= 0)
      borderPath += `${hasRight ? `L ${rightX} ${bottomY} L` : 'M'} ${componentWidth} ${bottomY} L 0 ${bottomY} `;
    if (borders.indexOf('l') >= 0)
      borderPath += `${hasBottom ? `L ${halfBorder} ${bottomY} L` : 'M'} ${halfBorder} ${componentHeight} L ${halfBorder} 0`;

    return borderPath;
  }

  private toPatternString(id: string, fillPattern: number, fillColor: string, className?: string) {
    switch (fillPattern) {
      case this.documentProperties.id_brushstyle_horizontal:
        return `<pattern id="${id}" class="${className}" x="2px" y="1px" width="8px" height="8px" patternUnits="userSpaceOnUse"><line x1="0" y1="8px" x2="8px" y2="8px" stroke="${fillColor}" stroke-width="1px" /></pattern>`;
      case this.documentProperties.id_brushstyle_vertical:
        return `<pattern id="${id}" class="${className}" x="2px" y="1px" width="8px" height="8px" patternUnits="userSpaceOnUse"><line x1="8px" y1="0" x2="8px" y2="8px" stroke="${fillColor}" stroke-width="1px" /></pattern>`;
      case this.documentProperties.id_brushstyle_fdiagonal:
        return `<pattern id="${id}" class="${className}" x="0.71px" y="0.71px" width="5.66px" height="5.66px" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="5.3px" x2="5.66px" y2="5.3px" stroke="${fillColor}" stroke-width="1px" /></pattern>`;
      case this.documentProperties.id_brushstyle_bdiagonal:
        return `<pattern id="${id}" class="${className}" x="0.71px" y="0.71px" width="5.66px" height="5.66px" patternTransform="rotate(-45)" patternUnits="userSpaceOnUse"><line x1="0" y1="5.3px" x2="5.66px" y2="5.3px" stroke="${fillColor}" stroke-width="1px" /></pattern>`;
      case this.documentProperties.id_brushstyle_cross:
        return `<pattern id="${id}" class="${className}" x="2px" y="1px" width="8px" height="8px" patternUnits="userSpaceOnUse"><line x1="8px" y1="0" x2="8px" y2="8px" stroke="${fillColor}" stroke-width="1px" /><line x1="0" y1="8px" x2="8px" y2="8px" stroke="${fillColor}" stroke-width="1px" /></pattern>`;
      case this.documentProperties.id_brushstyle_diagcross:
        return `<pattern id="${id}" class="${className}" x="0.71px" y="0.71px" width="5.66px" height="5.66px" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line  x1="5.66px" y1="0" x2="5.66px" y2="5.3px" stroke="${fillColor}" stroke-width="1px" /><line  x1="0" y1="5.3px" x2="5.66px" y2="5.3px" stroke="${fillColor}" stroke-width="1px" /></pattern>`;
      default:
        return '';
    }
  }

  private toPattern(id: string, fillPattern: number, fillColor: string, className?: string) {
    return this.sanitizer.bypassSecurityTrustHtml(this.toPatternString(id, fillPattern, fillColor, className));
  }

  toFillSpecs(patternId: string, fillPattern: number, fillColor: string, className?: string) {
    const fillSpecs: ComponentFillSpecs = {
      fillValue: '',
      fillPattern: null
    };

    switch (fillPattern) {
      case this.documentProperties.id_brushstyle_solid:
        fillSpecs.fillValue = fillColor;
        break;
      case this.documentProperties.id_brushstyle_clear:
        fillSpecs.fillValue = 'rgba(0,0,0,0)';
        break;
      default:
        fillSpecs.fillValue = 'url(#' + patternId + ')';
        fillSpecs.fillPattern = this.toPattern(patternId, fillPattern, fillColor);
        break;
    }

    return fillSpecs;
  }

  toMemoLineFillSpecs(patternId: string, def: MemoLineDefinition, textHeight: number) {
    const lengthPattern = this.toLengthArray(def.style, false),
      lineWidth = lengthPattern.reduce((previous, current) => previous + current, 0),
      lineTop = textHeight - (def.thickness / 2);

    return <ComponentFillSpecs>{
      fillValue: `url(#${patternId})`,
      fillPattern: this.sanitizer.bypassSecurityTrustHtml(`<pattern id="${patternId}" x="0" y="0" width="${lineWidth}px" height="${textHeight}px" patternUnits="userSpaceOnUse"><line x1="0" x2="${lineWidth}px" y1="${lineTop}px" y2="${lineTop}px" stroke="${def.color}" stroke-width="${def.thickness}px" stroke-dasharray="${lengthPattern.join(',')}"></line></pattern>`)
    };
  }

  joinFillPatterns(fillSpecs: Array<ComponentFillSpecs>) {
    const context = this,
      unpackedPatterns = fillSpecs.map(x => x.fillPattern ? context.sanitizer.sanitize(SecurityContext.NONE, x.fillPattern) : '').join(' ').trim();
    return unpackedPatterns ? this.sanitizer.bypassSecurityTrustHtml(unpackedPatterns) : null;
  }
}
