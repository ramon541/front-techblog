import * as React from 'react';

export function Edit(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || 16}
            height={props.height || 16}
            fill="none"
            viewBox="0 0 16 16">
            <path
                fill={props.color || '#000000'}
                fillRule="evenodd"
                d="M16 14.4V8.8h-1.6v5.6H1.6V1.6h5.6V0H1.6A1.6 1.6 0 0 0 0 1.6v12.8A1.6 1.6 0 0 0 1.6 16h12.8a1.6 1.6 0 0 0 1.6-1.6M13.742.579a1.963 1.963 0 0 0-2.786 0L4.261 7.276A3.24 3.24 0 0 0 3.203 9.43L3.2 12.002v.8h3.308c.907-.062 1.7-.458 2.258-1.103l6.657-6.654a1.97 1.97 0 0 0 0-2.786zm-7.29 10.625c.426-.03.824-.23 1.144-.595l4.85-4.85-2.204-2.203L5.357 8.44c-.324.286-.525.687-.557 1.054v1.708zm4.921-8.779 2.204 2.203.715-.715a.37.37 0 0 0 0-.522l-1.683-1.683a.365.365 0 0 0-.518 0z"
                clipRule="evenodd"></path>
        </svg>
    );
}
