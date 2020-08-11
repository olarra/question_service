import React, { ComponentProps } from 'react'
import Button from '@material-ui/core/Button';
import { QuestionList } from '../../components/organism/QuestionList';
import Form from '../../components/organism/Form';

const register = (props) => (
  <React.Fragment>
    <h1>新規登録</h1>
    <input type="nickname" placeholder="ニックネームを入力してください" required/>
  </React.Fragment>
);

export default register;