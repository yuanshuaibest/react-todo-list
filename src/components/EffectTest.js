import { useState, useEffect } from 'react';

function EffectTest(props) {
  const [page, setPage] = useState(0)
  const [keyword, setKeyword] = useState('')

  function fn(page, keyword) {
    console.log('发起 ajax 请求', page, keyword)
  }

  useEffect(() => {
    fn(page, keyword)
  }, [page, keyword])

  return <div>
    <button onClick={() => setPage(page + 1)}>setPage</button>
    <button onClick={() => setKeyword(keyword + 'x')}>setKeyword</button>
    <p>App page</p>
  </div>
}

export default EffectTest;
