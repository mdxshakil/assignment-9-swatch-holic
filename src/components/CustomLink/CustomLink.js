import React from 'react';
import { useResolvedPath,useMatch,Link} from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link className='px-5 font-bold text-xl'
          style={
            { textDecoration: match ? "underline" : "none", color: match ? 'red' : 'white' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;