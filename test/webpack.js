var testsContext = require.context('../src/', true, /_spec$/);
testsContext.keys().forEach(testsContext);
