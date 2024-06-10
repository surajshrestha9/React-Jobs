import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    /* 90% for screen width */
    margin: 0 auto;
    padding: 2rem 0;
    /* top bottom Left Right */
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
      /* 90% of the content */
    }
  }
`;
export default Wrapper;
