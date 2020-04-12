import { Dispatch } from 'redux';
import { HOME } from '@constants';

export const homeActions = {
  getTitle: () => async (dispatch: Dispatch) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Next.js | Typescript | Redux boilerplate by eqbit.tech');
      }, 10);
    });
    
    const title = await promise;
    
    dispatch({
      type: HOME.SET,
      payload: {
        title,
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Ab amet assumenda consectetur corporis deleniti dicta dignissimos,
         distinctio dolorem doloribus earum eligendi eos fuga hic id inventore
         ipsa laudantium minima minus natus nisi nostrum numquam officia optio,
          perspiciatis porro quaerat, quasi quisquam quos repellendus
          repudiandae sed totam voluptas voluptate. Ab aspernatur assumenda
          consequatur dignissimos dolorem error esse explicabo id, laboriosam
          minima molestiae natus nobis nulla omnis quam quisquam recusandae rem
          sunt voluptate voluptatem. A ad adipisci alias commodi consequatur
          cum debitis deleniti dicta dolor ducimus eaque esse explicabo facere
          facilis hic inventore ipsum labore molestiae mollitia nesciunt nostrum
           nulla officiis placeat porro provident quam quia quos ratione rerum
           tempora, tempore ut vitae voluptas? A accusantium ad aperiam
           architecto asperiores assumenda autem, cum cumque, cupiditate
           deleniti distinctio dolor esse et eum fuga in ipsum iste magnam
            maxime molestias mollitia nesciunt omnis optio pariatur possimus
            quae quaerat qui quibusdam sint, sit tempora tempore totam
            voluptate. Adipisci autem fugiat harum iusto quasi temporibus
             velit? Doloribus illum ipsum repudiandae ut veniam? Aut beatae
              doloribus, ea eaque eius enim numquam odit pariatur qui
              recusandae. Adipisci aut autem blanditiis, consequuntur cumque
               debitis dolor eveniet fugiat id illo incidunt iste molestias nam,
                nemo nostrum odio odit porro possimus praesentium quaerat
                 quibusdam quis ratione rerum similique suscipit, unde
                 voluptate! Aliquam corporis cum cumque delectus, deserunt
                  distinctio eum iusto maxime minus mollitia nostrum provident
                   quam quo rem repellendus velit vero.`
      }
    });
  }
};
