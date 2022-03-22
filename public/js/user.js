const remove = document.querySelectorAll('.remove');

remove.forEach((el) => {
  el.addEventListener('click', async (e) => {
    const { id } = e.target.closest('div');
    const response = await fetch('/user/del', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (response.ok) {
      e.target.closest('div').remove();
    }
  });
});
