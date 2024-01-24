import http from 'k6/http';
import { sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';

export const options = {
  stages: [{ duration: '1m', target: 10000 }],
  summaryTrendStats: ['avg', 'p(95)'],
};

export default function () {
  http.get('http://localhost:3000/');
  sleep(1);
}

export function handleSummary(data) {
  const { rate } = data.metrics.http_req_failed.values;
  const reportPath = 'test/stress/report/hyper';
  console.log(rate);
  return {
    [reportPath]: rate + '',
    stdout: textSummary(data),
  };
}
