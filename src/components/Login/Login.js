import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, submit, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import connect from 'redux-connect-decorator';
import { login } from '../../store/Auth/Auth.store';
import scss from './Login.scss';
import autobind from 'autobind-decorator';

@reduxForm({
  form: 'loginForm',
  enableReinitialize: true,
  initialValues: {
    email: 'admin@admin.com',
    password: '',
  },
  onSubmit: (values, dispatch) => {
    dispatch(login(values));
  },
})
@connect(
  state => ({
    isLogin: state.auth.isLogin,
  }),
  {
    submit: () => submit('loginForm'),
  },
)
export class Login extends Component {
  constructor(props) {
    super(props);
  }

  @autobind
  onClickLogin(e) {
    e.stopPropagation();
    this.props.submit();
    // this.props.login({ username: 'jaeeonjin', password: 'test' });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">로그인</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <Field
                      name="email"
                      component="input"
                      type="text"
                      placeholder="이메일"
                      id="inputEmail"
                      className="form-control"
                      required
                    />
                    <label htmlFor="inputEmail">이메일</label>
                  </div>

                  <div className="form-label-group">
                    <Field
                      name="password"
                      component="input"
                      type="text"
                      placeholder="비밀번호"
                      id="inputPassword"
                      className="form-control"
                      required
                    />
                    <label htmlFor="inputPassword">비밀번호</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                </form>
                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  onClick={e => this.onClickLogin(e)}
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object,
  login: PropTypes.func,
  isLogin: PropTypes.bool,
  submit: PropTypes.func,
};

export default Login;
