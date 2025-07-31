/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

export const SERVICE_NAME = 'openelemetry-express';

export const EVENT_USER_PROMPT = 'openelemetry-express.user_prompt';
export const EVENT_TOOL_CALL = 'openelemetry-express.tool_call';
export const EVENT_API_REQUEST = 'openelemetry-express.api_request';
export const EVENT_API_ERROR = 'openelemetry-express.api_error';
export const EVENT_API_RESPONSE = 'openelemetry-express.api_response';
export const EVENT_CLI_CONFIG = 'openelemetry-express.config';
export const EVENT_FLASH_FALLBACK = 'openelemetry-express.flash_fallback';

export const METRIC_TOOL_CALL_COUNT = 'openelemetry-express.tool.call.count';
export const METRIC_TOOL_CALL_LATENCY = 'openelemetry-express.tool.call.latency';
export const METRIC_API_REQUEST_COUNT = 'openelemetry-express.api.request.count';
export const METRIC_API_REQUEST_LATENCY = 'openelemetry-express.api.request.latency';
export const METRIC_TOKEN_USAGE = 'openelemetry-express.token.usage';
export const METRIC_SESSION_COUNT = 'openelemetry-express.session.count';
export const METRIC_FILE_OPERATION_COUNT = 'openelemetry-express.file.operation.count';
