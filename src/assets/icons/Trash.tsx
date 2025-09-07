import * as React from 'react';

export function Trash(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || 12}
            height={props.height || 14}
            fill="none"
            viewBox="0 0 12 14">
            <path
                fill={props.color || '#000000'}
                fillRule="evenodd"
                d="M4.2 0h3.6A1.2 1.2 0 0 1 9 1.2v.6h1.8c.663 0 1.2.517 1.2 1.156V4.11c0 .638-.537 1.156-1.2 1.156h-.04l-.56 6.981c0 .692-.537 1.252-1.2 1.252H3c-.663 0-1.2-.56-1.198-1.2L1.24 5.267H1.2C.537 5.267 0 4.749 0 4.11V2.956C0 2.317.537 1.8 1.2 1.8H3v-.6A1.2 1.2 0 0 1 4.2 0M3 3H1.2v1.2h9.6V3H3m0 9.248-.548-6.885h7.096l-.546 6.833-.002.052zM7.8 1.2v.6H4.2v-.6z"
                clipRule="evenodd"></path>
        </svg>
    );
}
