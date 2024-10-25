let timeoutId; // Store timeout ID globally to clear if necessary

export function debounceSaveProgress(finalAction, delay = 5000) {
  if (timeoutId) {
    clearTimeout(timeoutId); // Clear the previous timeout if it exists
  }

  timeoutId = setTimeout(() => {
    finalAction(); // Dispatch after delay
  }, delay);
}
