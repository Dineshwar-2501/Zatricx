type prop = {
    children: React.ReactNode
}

export default function Layout({ children }: prop) {
    return (<main>
        <section>
            <p>slug layout     </p>    

        </section>
        <section>
            {children}
        </section>
    </main>
    );
}