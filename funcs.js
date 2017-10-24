export const ife = (a, b = null, c = null) => b === null ? a ? a : null : c === null ? a ? b : null : a ? b : c

export const isNumberStr = (str) => String(parseInt(str, 10)) === String(str)

export const ucfirst = (str) => str[0].toUpperCase() + str.slice(1)

export const camelCase = (str) => str.replace(/-([a-z])/g, c => c[1].toUpperCase())

export const classify = (str) => ucfirst(camelCase(str))

export const slugify = (str) => str.toLowerCase().replace(/\s/g, '-')

export const unslugify = (str) => str.replace(/-/g, ' ')

export const includes = (str1, str2) => str1.indexOf(str2) !== -1

export const beginsWith = (str1, str2) => str1.indexOf(str2) === 0

export const endsWith = (str1, str2) => str1.substr(str1.length - str2.length) === str2

export const isStrOr = (str1, ...m) => m.reduce((s,x) => s || str1 === x, false)

export const isStrAnd = (str1, ...m) => m.reduce((s,x) => s && str1 === x, true)

export const concat = (...parts) => parts.join('')

export const url = (...parts) => parts.join('/')

export const px = (num) => num + 'px'

export const percent = (num) => num + '%'

export const implode = (char, ...strs) => strs.join(char)

export const repeat = (char, times) => {
	const recurse = (str) => str.length < times ? recurse(str + char) : str
	return recurse(char)
}
