/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { EuiButton, EuiPanel, EuiSpacer, EuiText, EuiTextColor } from '@elastic/eui';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { history } from '../../utils/url';
import { ErrorIcon } from '../shared/icons';

const Root = styled.div`
  width: 31rem;
  margin: auto;
`;

export const ErrorPanel = (props: { title: ReactNode; content: string }) => {
  return (
    <Root>
      <EuiPanel>
        <EuiSpacer />
        <EuiText textAlign="center">
          <ErrorIcon />
        </EuiText>
        <EuiText textAlign="center">{props.title}</EuiText>
        <EuiSpacer />
        <EuiText textAlign="center">
          <EuiTextColor>{props.content}</EuiTextColor>
        </EuiText>
        <EuiSpacer />
        <EuiSpacer />
        <EuiText textAlign="center">
          <EuiButton fill={true} onClick={history.goBack}>
            Go Back
          </EuiButton>
        </EuiText>
        <EuiSpacer />
        <EuiSpacer />
        <EuiSpacer />
      </EuiPanel>
    </Root>
  );
};