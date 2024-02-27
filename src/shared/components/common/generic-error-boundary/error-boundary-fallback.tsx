import { ActivityIcon, HelpCircleIcon } from 'lucide-react';
import Link from 'next/link';
import { type FallbackProps } from 'react-error-boundary';

export function ErrorBoundaryFallback({
	error,
	resetErrorBoundary,
}: FallbackProps) {
	return (
		<div className="flex w-full justify-center">
			<div
				role="alert"
				className="container m-4 my-5 w-full rounded border border-primary bg-primary/5 px-4 py-3 text-primary"
			>
				<p>
					<ActivityIcon className="mr-2 inline-block" />
					Algo deu errado:
				</p>

				<pre className="my-3 overflow-auto whitespace-normal rounded bg-primary p-2 font-mono text-primary-foreground">
					{error.message}
				</pre>

				<p className="my-3 flex flex-col items-center text-sm text-muted-foreground sm:flex-row">
					<HelpCircleIcon size={16} className="mr-2" />
					Se o problema persistir, entre em contato com o &nbsp;
					<Link className="underline" href="/contato">
						suporte técnico.
					</Link>
				</p>

				<div className="mt-6 flex flex-col gap-2 whitespace-normal sm:flex-row">
					<button onClick={resetErrorBoundary}>Tente novamente</button>
					<button onClick={() => window.location.reload()}>
						Recarregar a página
					</button>
				</div>
			</div>
		</div>
	);
}
