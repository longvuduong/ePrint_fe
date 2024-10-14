import { memo } from 'react';
import Header from '../header';
import Footer from '../footer';
const MasterLayout = ({ children, hideHeader, hideFooter, ...props }) => {
  if (hideHeader && hideFooter) {
    return (
      <div {...props} style={{ overflow: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <div {...props} style={{ overflow: 'hidden' }}>
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </div>
  );
};
export default memo(MasterLayout);
