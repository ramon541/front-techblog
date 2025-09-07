import * as React from 'react';

export function Logout(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || 15}
            height={props.height || 17}
            fill="none"
            viewBox="0 0 15 17">
            <path
                className="fill-current"
                fill={props.color || '#000000'}
                d="M14.925 7.796a.8.8 0 0 0-.187-.285l-3.081-3.08a.883.883 0 0 0-1.244 0 .883.883 0 0 0 0 1.243l1.577 1.577H5.894a.88.88 0 0 0-.878.878c0 .48.398.878.878.878h6.096l-1.577 1.577a.883.883 0 0 0 .626 1.504c.228 0 .447-.09.626-.26l3.081-3.081a.882.882 0 0 0 .187-.96z"></path>
            <path
                className="fill-current"
                fill={props.color || '#000000'}
                d="M7.918.813A.815.815 0 0 0 7.105 0H1.219C.545 0 0 .545 0 1.22v13.819c0 .674.545 1.219 1.22 1.219h5.893a.815.815 0 0 0 .813-.813.815.815 0 0 0-.813-.813h-5.08a.4.4 0 0 1-.407-.406V2.032c0-.227.179-.406.406-.406h5.08a.815.815 0 0 0 .814-.813z"></path>
        </svg>
    );
}
