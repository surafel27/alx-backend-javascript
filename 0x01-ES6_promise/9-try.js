export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const mathResult = mathFunction();
    queue.push(mathResult);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
